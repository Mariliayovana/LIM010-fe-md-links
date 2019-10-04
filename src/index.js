// eslint-disable-next-line jest/no-disabled-tests
import path from 'path';

// import { obtenerArrayMdLinks } from './markdown';
import {
  esArchivo,
  esCarperta,
  leerDirectorio,
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
// console.log(obtenerArrayMd('../LIM010-fe-md-links/prueba'));
