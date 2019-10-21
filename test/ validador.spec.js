import {
  validandoLinks,
} from '../src/validador.js';

const rut = '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2';
const arrayObj = [{
  href: 'http://www.google.com',
  text: 'Yovanita Bonita',
  file: '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'http://holamellamomarilia.com',
  text: 'error',
  file: '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md',
  status: 'no existe',
  statusText: 'fail',
},
{
  href: 'https://www.robotstxt.org/wc/hola.html',
  text: '404',
  file: '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/prueba2/yovi.md',
  status: 404,
  statusText: 'fail',
}];

describe('validandoLinks', () => {
  it('Debe validar los links', (done) => {
    validandoLinks(rut).then((res) => {
      expect(res).toEqual(arrayObj);
      done();
    });
  });
});
