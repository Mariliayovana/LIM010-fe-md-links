"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = exports.obtenerArrayMd = exports.leerDirectorio = exports.esArchivoMd = exports.esCarperta = exports.esArchivo = exports.obtenerRutaAbsoluta = void 0;

// eslint-disable-next-line jest/no-disabled-tests
const path = require('path');

const fs = require('fs'); // Devuelve la ruta absoluta de una ruta


const obtenerRutaAbsoluta = ruta => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }

  return path.resolve(ruta);
}; // si es archivo devuelve true, sino false


exports.obtenerRutaAbsoluta = obtenerRutaAbsoluta;

const esArchivo = ruta => fs.lstatSync(ruta).isFile(); // si es directorio/carpeta devuelve true, sino false


exports.esArchivo = esArchivo;

const esCarperta = ruta => fs.lstatSync(ruta).isDirectory(); // si el archivo es un markdown, se agrega (.md) devuelve true o false


exports.esCarperta = esCarperta;

const esArchivoMd = route => path.extname(route) === '.md'; // devuelve un array con todos los archivos de la ruta


exports.esArchivoMd = esArchivoMd;

const leerDirectorio = ruta => fs.readdirSync(ruta, 'utf8');

exports.leerDirectorio = leerDirectorio;

const obtenerArrayMd = ruta => {
  let arrMd = [];

  if (esArchivo(ruta)) {
    // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(ruta)) {
      arrMd.push(ruta);
    }
  } else if (esCarperta(ruta)) {
    // Si es una carpeta
    const archivos = leerDirectorio(ruta);
    archivos.forEach(elem => {
      const rutaAbsoluta = `${ruta}/${elem}`;
      const arrayRutas = obtenerArrayMd(rutaAbsoluta); // se vuelve recurciva

      arrMd = arrMd.concat(arrayRutas);
    });
  }

  return arrMd;
};

exports.obtenerArrayMd = obtenerArrayMd;

const mdLinks = (ruta, opciones) => {
  // obtengo la ruta absoluta
  const rutaAbsoluta = obtenerRutaAbsoluta(ruta); // aqui es cuando se revisa si el archivo o ruta existe

  const rutaExiste = fs.existsSync(rutaAbsoluta);

  if (rutaExiste) {
    // Obtiene un array con las rutas de los markdown
    console.log(obtenerArrayMd(rutaAbsoluta));
  }
};

exports.mdLinks = mdLinks;
mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/archivos');