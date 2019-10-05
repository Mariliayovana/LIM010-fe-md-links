"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _markdown = require("./markdown");

var _validador = require("./validador");

var _filesystem = require("./filesystem");

// eslint-disable-next-line jest/no-disabled-tests
// console.log(obtenerArrayMd('../LIM010-fe-md-links/prueba'));
const mdLinks = (path, opts = {}) => new Promise((resolve, reject) => {
  if ((0, _filesystem.existeRuta)(path)) {
    if (opts.validate === true) {
      resolve((0, _validador.validandoLinks)(path));
    } else {
      resolve((0, _markdown.obtenerArrayMdLinks)(path));
    }
  } else {
    reject(new Error('No existe la ruta'));
  }
});

exports.mdLinks = mdLinks;
mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/prueba', {
  validate: true
}).then(res => {
  console.log(res);
}); //validandoLinks('/home/marilia/Proyectos/LIM010-fe-md-links/prueba');