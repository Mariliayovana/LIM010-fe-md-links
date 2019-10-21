"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArrayMdLinks = exports.obtenerArrayMd = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _path = require("./path");

var _filesystem = require("./filesystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const obtenerArrayMd = ruta => {
  const newRuta = (0, _path.obtenerRutaAbsoluta)(ruta); // es ruta absoluta

  let arrMd = [];

  if ((0, _filesystem.esArchivo)(newRuta)) {
    // Si es un archivo
    // Revisar si es un markdown
    if ((0, _path.esArchivoMd)(newRuta)) {
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
};

exports.obtenerArrayMd = obtenerArrayMd;
console.log(obtenerArrayMd('/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md'));

const obtenerArrayMdLinks = ruta => {
  const arrPaths = obtenerArrayMd(ruta); // array de .md

  const arrLinks = [];
  arrPaths.forEach(filePath => {
    const markdownContent = (0, _filesystem.leerArchivo)(filePath).toString(); // obtengo una reference const renderer = new myMarked.Renderer();

    const renderer = new _marked.default.Renderer(); // Cuando encuentro un enlace en markdownContent, lo agrego a arrLinks

    renderer.link = (href, title, text) => {
      arrLinks.push({
        href,
        text,
        file: filePath
      });
    };

    (0, _marked.default)(markdownContent, {
      renderer
    });
  });
  return arrLinks;
};

exports.obtenerArrayMdLinks = obtenerArrayMdLinks;