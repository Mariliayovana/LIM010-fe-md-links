"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = exports.obtenerArrayMd = exports.esArchivoMd = exports.obtenerRutaAbsoluta = void 0;

var _path = _interopRequireDefault(require("path"));

var _markdown = require("./markdown");

var _filesystem = require("./filesystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line jest/no-disabled-tests
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
  let arrMd = [];

  if ((0, _filesystem.esArchivo)(ruta)) {
    // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(ruta)) {
      arrMd.push(ruta);
    }
  } else if ((0, _filesystem.esCarperta)(ruta)) {
    // Si es una carpeta
    const archivos = (0, _filesystem.leerDirectorio)(ruta);
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

  const rutaExiste = (0, _filesystem.existeRuta)(rutaAbsoluta);

  if (rutaExiste) {
    // Obtiene un array con las rutas de los markdown
    const arrMd = obtenerArrayMd(rutaAbsoluta); // Obtiene un array con los enlaces de los markdowns

    const arrLinks = (0, _markdown.obtenerArrayMdLinks)(arrMd);
    console.log(arrLinks);
  }
};

exports.mdLinks = mdLinks;
mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/archivos');