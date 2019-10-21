"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = exports.mdLinks = void 0;

var _markdown = require("./markdown");

var _validador = require("./validador");

var _filesystem = require("./filesystem");

var _stats = require("./stats");

// eslint-disable-next-line jest/no-disabled-tests
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

const mdLinksCli = (path, opts = {}) => new Promise((resolve, reject) => {
  mdLinks(path, opts).then(res => {
    if (path !== undefined && opts.val === undefined && opts.stat === undefined) {
      const result = res.map(element => `${element.file} ${element.href} ${element.text}`);
      resolve(result.join('\n'));
    } else if (path !== undefined && opts.val === '--stats' && opts.stat === '--validate') {
      resolve((0, _stats.statsValidate)(res));
    } else if (path !== undefined && opts.val === '--validate') {
      const result1 = res.map(element => `${element.file}  ${element.href} ${element.text} ${element.status} ${element.statusText}`);
      resolve(result1.join('\n'));
    } else if (path !== undefined && opts.val === '--stats') {
      resolve((0, _stats.stats)(res));
    } else {
      resolve('ingrese ruta');
    }
  }).catch(err => {
    reject(err);
  });
});

exports.mdLinksCli = mdLinksCli;