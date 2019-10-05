import marked from 'marked';
import { obtenerRutaAbsoluta, esArchivoMd } from './path';
import {
  esArchivo,
  esCarperta,
  leerDirectorio,
  leerArchivo,
} from './filesystem';

export const obtenerArrayMd = (ruta) => {
  const newRuta = obtenerRutaAbsoluta(ruta);// es ruta absoluta
  let arrMd = [];
  if (esArchivo(newRuta)) { // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(newRuta)) {
      arrMd.push(newRuta);
    }
  } else if (esCarperta(newRuta)) { // Si es una carpeta
    const archivos = leerDirectorio(newRuta);
    archivos.forEach((elem) => {
      const rutaAbsoluta = `${ruta}/${elem}`;
      const arrayRutas = obtenerArrayMd(rutaAbsoluta);// se vuelve recurciva
      arrMd = arrMd.concat(arrayRutas);
    });
  }
  return arrMd;
};

export const obtenerArrayMdLinks = (ruta) => {
  const arrPaths = obtenerArrayMd(ruta); // array de .md
  const arrLinks = [];
  arrPaths.forEach((filePath) => {
    const markdownContent = leerArchivo(filePath).toString();
    // obtengo una reference const renderer = new myMarked.Renderer();
    const renderer = new marked.Renderer();
    // Cuando encuentro un enlace en markdownContent, lo agrego a arrLinks
    renderer.link = (href, title, text) => {
      arrLinks.push({ href, text, file: filePath });
    };
    marked(markdownContent, { renderer });
  });

  return arrLinks;
};