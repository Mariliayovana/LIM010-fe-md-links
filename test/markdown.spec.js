import {
  obtenerArrayMd,
  obtenerArrayMdLinks,
} from '../src/markdown.js';

const rut = '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2';
const rutArchivo = '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md';
const rutMd = ['/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md'];
const rutArray = [{
  href: 'http://www.google.com',
  text: 'Yovanita Bonita',
  file: '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md',
},
{
  href: 'http://holamellamomarilia.com',
  text: 'error',
  file: '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md',
},
{
  href: 'https://www.robotstxt.org/wc/hola.html',
  text: '404',
  file:
    '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md'
}];

describe('obtenerArrayMd', () => {
  it('validar carpeta', () => {
    expect(obtenerArrayMd(rut)).toEqual(rutMd);
  });
});


describe('obtenerArrayMdLinks', () => {
  it('validar archivo', () => {
    expect(obtenerArrayMdLinks(rutArchivo)).toEqual(rutArray);
  });
});
