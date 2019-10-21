import fetch from 'node-fetch';
import { obtenerArrayMdLinks } from './markdown.js';

export const validandoLinks = (ruta) => {
  const obtenerRuta = obtenerArrayMdLinks(ruta); // array con las tres propiedades
  const resultPromise = obtenerRuta.map(element => new Promise((resolve) => {
    const objMd = { ...element };
    fetch(element.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          objMd.status = res.status;
          objMd.statusText = res.statusText;
        } else {
          objMd.status = res.status;
          objMd.statusText = 'fail';
        }
        resolve(objMd);
      })
      .catch(() => {
        objMd.status = 'no existe';
        objMd.statusText = 'fail';
        resolve(objMd);
      });
  }));
  return Promise.all(resultPromise);
};
// validandoLinks('/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2').then((valor) => {
//   console.log(valor);
// });
