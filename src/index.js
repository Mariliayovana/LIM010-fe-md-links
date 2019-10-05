// eslint-disable-next-line jest/no-disabled-tests
import { obtenerArrayMdLinks } from './markdown';
import { validandoLinks } from './validador';
import { existeRuta } from './filesystem';

// console.log(obtenerArrayMd('../LIM010-fe-md-links/prueba'));

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

mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/prueba', { validate: true }).then((res) => {
  console.log(res);
});
//validandoLinks('/home/marilia/Proyectos/LIM010-fe-md-links/prueba');