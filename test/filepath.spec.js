import {
  obtenerRutaAbsoluta,
  esArchivoMd,
} from '../src/path.js';
import {
  esArchivo,
  esCarperta,
  leerDirectorio,
  leerArchivo,
  existeRuta,
} from '../src/filesystem.js';

const pathRelative = './data';
const pathabso = '/home/marilia/Proyectos/LIM010-fe-md-links/data';
const pathArch = '/home/marilia/Proyectos/LIM010-fe-md-links/prueba/hello.md';
const pathCar = '/home/marilia/Proyectos/LIM010-fe-md-links/src';
const read = ['cli.js',
  'filesystem.js',
  'index.js',
  'markdown.js',
  'path.js',
  'stats.js',
  'validador.js'];
const readArch = 'Otras: [MariLink](http://yoursite.com/new-link-to-replace/)';

describe('obtenerRutaAbsoluta', () => {
  it('Devuelve la ruta absoluta', () => {
    expect(obtenerRutaAbsoluta(pathRelative)).toBe(pathabso);
  });
});


describe('esArchivoMd', () => {
  it('si es archivo md, devuelve true y si no es devuelve false booleano ', () => {
    expect(esArchivoMd(pathabso)).toBe(false);
  });
});

describe('esArchivo', () => {
  it('si es archivo devuelve true, sino false', () => {
    expect(esArchivo(pathArch)).toBe(true);
  });
});

describe('esCarperta', () => {
  it(' si es directorio/carpeta devuelve true, sino false', () => {
    expect(esCarperta(pathCar)).toBe(true);
  });
});

describe('leerDirectorio', () => {
  it('devuelve un array con todos los archivos de la ruta', () => {
    expect(leerDirectorio('/home/marilia/Proyectos/LIM010-fe-md-links/src')).toEqual(read);
  });
});

describe('leerArchivo', () => {
  it('devuelve el contenido de un archivo', () => {
    expect(leerArchivo('/home/marilia/Proyectos/LIM010-fe-md-links/prueba/lucero.md')).toEqual(readArch);
  });
});

describe('existeRuta', () => {
  it('si existe la ruta devuelve true', () => {
    expect(existeRuta(pathCar)).toBe(true);
  });
});
