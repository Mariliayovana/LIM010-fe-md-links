"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerArrayMdLinks = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _filesystem = require("./filesystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const obtenerArrayMdLinks = arrPaths => {
  const arrObj = [];
  arrPaths.forEach(filePath => {
    const markdownContent = (0, _filesystem.leerArchivo)(filePath).toString();
    console.log(markdownContent);
    const renderer = new _marked.default.Renderer(); // Get reference var renderer = new myMarked.Renderer();

    renderer.link = (href, _, text) => {
      arrObj.push({
        href,
        text,
        file: filePath
      });
    };

    (0, _marked.default)(markdownContent, {
      renderer
    });
  });
  return arrObj;
};

exports.obtenerArrayMdLinks = obtenerArrayMdLinks;