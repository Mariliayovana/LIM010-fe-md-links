"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = exports.esArchivo = exports.esArchivoMd = exports.obtenerRutaAbsoluta = void 0;

// eslint-disable-next-line jest/no-disabled-tests
const path = require('path');

const fs = require('fs'); // Devuelve la ruta absoluta de una ruta


const obtenerRutaAbsoluta = ruta => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }

  return path.resolve(ruta);
}; // si el archivo es un markdown (.md) devuelve true, lo contrario false


exports.obtenerRutaAbsoluta = obtenerRutaAbsoluta;

const esArchivoMd = route => path.extname(route) === 'md'; // si es archivo devuelve true, sino false


exports.esArchivoMd = esArchivoMd;

const esArchivo = ruta => fs.lstatSync(ruta).isFile();

exports.esArchivo = esArchivo;

const mdLinks = (ruta, opciones) => {
  // Obtengo la ruta absoluta
  const rutaAbsoluta = obtenerRutaAbsoluta(ruta); // Reviso si el archivo existe

  const rutaExiste = fs.existsSync(rutaAbsoluta);

  if (rutaExiste) {
    const esUnArchivo = esArchivo(rutaAbsoluta);
    console.log(esUnArchivo);
  }
};

exports.mdLinks = mdLinks;
mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/src/app.js');