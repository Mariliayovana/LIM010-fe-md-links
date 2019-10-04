"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArrayMdLinks = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _filesystem = require("./filesystem");

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const obtenerArrayMdLinks = rout => {
  const arrPaths = (0, _index.obtenerArrayMd)(rout); // array de .md

  const arrLinks = [];
  arrPaths.forEach(filePath => {
    const markdownContent = (0, _filesystem.leerArchivo)(filePath).toString(); // obtengo una reference const renderer = new myMarked.Renderer();

    const renderer = new _marked.default.Renderer(); // Cuando encuentro un enlace en markdownContent, lo agrego a arrLinks

    renderer.link = (href, _, text) => {
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
}; // console.log(obtenerArrayMdLinks('../LIM010-fe-md-links/prueba'));


exports.obtenerArrayMdLinks = obtenerArrayMdLinks;