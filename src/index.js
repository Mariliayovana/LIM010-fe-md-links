// eslint-disable-next-line jest/no-disabled-tests
import { obtenerArrayMdLinks } from './markdown';
import { validandoLinks } from './validador';
import { existeRuta } from './filesystem';
import { stats, statsValidate } from './stats';

export const mdLinks = (path, opts = {}) => new Promise((resolve, reject) => {
  if (existeRuta(path)) {
    if (opts.validate === true) {
      resolve(validandoLinks(path));
    } else {
      resolve(obtenerArrayMdLinks(path));
    }
  } else {
    reject(new Error('No existe la ruta'));
  }
});

export const mdLinksCli = (path, opts = {}) => new Promise((resolve, reject) => {
  mdLinks(path, opts)
    .then((res) => {
      if (path !== undefined && opts.val === undefined && opts.stat === undefined) {
        const result = res.map(element => `${element.file} ${element.href} ${element.text}`);
        resolve(result.join('\n'));
      } else if (path !== undefined && opts.val === '--stats' && opts.stat === '--validate') {
        resolve(statsValidate(res));
      } else if (path !== undefined && opts.val === '--validate') {
        const result1 = res.map(element => `${element.file}  ${element.href} ${element.text} ${element.status} ${element.statusText}`);
        resolve(result1.join('\n'));
      } else if (path !== undefined && opts.val === '--stats') {
        resolve(stats(res));
      } else {
        resolve('ingrese ruta');
      }
    })
    .catch((err) => {
      reject(err);
    });
});
