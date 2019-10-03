// eslint-disable-next-line jest/no-disabled-tests
import path from 'path';
import { obtenerArrayMdLinks } from './markdown';
import {
  esArchivo,
  esCarperta,
  leerDirectorio,
  existeRuta,
} from './filesystem';

// Devuelve la ruta absoluta de una ruta
export const obtenerRutaAbsoluta = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

// si el archivo es un markdown, se agrega (.md) devuelve true o false
export const esArchivoMd = route => path.extname(route) === '.md';

export const obtenerArrayMd = (ruta) => {
  let arrMd = [];

  if (esArchivo(ruta)) { // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(ruta)) {
      arrMd.push(ruta);
    }
  } else if (esCarperta(ruta)) { // Si es una carpeta
    const archivos = leerDirectorio(ruta);
    archivos.forEach((elem) => {
      const rutaAbsoluta = `${ruta}/${elem}`;
      const arrayRutas = obtenerArrayMd(rutaAbsoluta);// se vuelve recurciva
      arrMd = arrMd.concat(arrayRutas);
    });
  }

  return arrMd;
};

export const mdLinks = (ruta, opciones) => {
  // obtengo la ruta absoluta
  const rutaAbsoluta = obtenerRutaAbsoluta(ruta);

  // aqui es cuando se revisa si el archivo o ruta existe
  const rutaExiste = existeRuta(rutaAbsoluta);

  if (rutaExiste) {
    // Obtiene un array con las rutas de los markdown
    const arrMd = obtenerArrayMd(rutaAbsoluta);

    // Obtiene un array con los enlaces de los markdowns
    const arrLinks = obtenerArrayMdLinks(arrMd);

    console.log(arrLinks);
  }
};

mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/archivos');
