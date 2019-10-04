"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArrayMd = exports.esArchivoMd = exports.obtenerRutaAbsoluta = void 0;

var _path = _interopRequireDefault(require("path"));

var _filesystem = require("./filesystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line jest/no-disabled-tests
// import { obtenerArrayMdLinks } from './markdown';
// Devuelve la ruta absoluta de una ruta
const obtenerRutaAbsoluta = ruta => {
  if (_path.default.isAbsolute(ruta) === true) {
    return ruta;
  }

  return _path.default.resolve(ruta);
}; // si el archivo es un markdown, se agrega (.md) devuelve true o false


exports.obtenerRutaAbsoluta = obtenerRutaAbsoluta;

const esArchivoMd = route => _path.default.extname(route) === '.md';

exports.esArchivoMd = esArchivoMd;

const obtenerArrayMd = ruta => {
  const newRuta = obtenerRutaAbsoluta(ruta); // es ruta absoluta

  let arrMd = [];

  if ((0, _filesystem.esArchivo)(newRuta)) {
    // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(newRuta)) {
      arrMd.push(newRuta);
    }
  } else if ((0, _filesystem.esCarperta)(newRuta)) {
    // Si es una carpeta
    const archivos = (0, _filesystem.leerDirectorio)(newRuta);
    archivos.forEach(elem => {
      const rutaAbsoluta = `${ruta}/${elem}`;
      const arrayRutas = obtenerArrayMd(rutaAbsoluta); // se vuelve recurciva

      arrMd = arrMd.concat(arrayRutas);
    });
  }

  return arrMd;
}; // console.log(obtenerArrayMd('../LIM010-fe-md-links/prueba'));


exports.obtenerArrayMd = obtenerArrayMd;