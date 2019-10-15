import {
  obtenerRutaAbsoluta,
  esArchivoMd
} from '../src/path.js';

const pathRelative = './data';
const pathabso = '/home/marilia/Proyectos/LIM010-fe-md-links/data';

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
