import path from 'path';

// Devuelve la ruta absoluta de una ruta
export const obtenerRutaAbsoluta = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

// si el archivo es un markdown, se agrega (.md) devuelve true o false
export const esArchivoMd = route => path.extname(route) === '.md';
