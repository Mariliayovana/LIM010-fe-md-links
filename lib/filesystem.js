"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existeRuta = exports.leerArchivo = exports.leerDirectorio = exports.esCarperta = exports.esArchivo = void 0;

const fs = require('fs'); // si es archivo devuelve true, sino false


const esArchivo = ruta => fs.lstatSync(ruta).isFile(); // si es directorio/carpeta devuelve true, sino false


exports.esArchivo = esArchivo;

const esCarperta = ruta => fs.lstatSync(ruta).isDirectory(); // devuelve un array con todos los archivos de la ruta


exports.esCarperta = esCarperta;

const leerDirectorio = ruta => fs.readdirSync(ruta, 'utf8'); // devuelve el contenido de un archivo


exports.leerDirectorio = leerDirectorio;

const leerArchivo = ruta => fs.readFileSync(ruta, 'utf8'); // revisa si existe la ruta


exports.leerArchivo = leerArchivo;

const existeRuta = ruta => fs.existsSync(ruta);

exports.existeRuta = existeRuta;