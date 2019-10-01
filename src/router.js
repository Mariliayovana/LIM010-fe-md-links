// eslint-disable-next-line jest/no-disabled-tests
const path = require('path');
const fs = require('fs');

// Devuelve la ruta absoluta de una ruta
export const obtenerRutaAbsoluta = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};

// si el archivo es un markdown (.md) devuelve true sino false
export const esArchivoMd = route => path.extname(route) === 'md';

// si es archivo devuelve true, sino false
export const esArchivo = ruta => fs.lstatSync(ruta).isFile();

export const mdLinks = (ruta, opciones) => {
  // obtengo la ruta absoluta
  const rutaAbsoluta = obtenerRutaAbsoluta(ruta);

  // aqui es cuando se revisa si el archivo existe
  const rutaExiste = fs.existsSync(rutaAbsoluta);

  if (rutaExiste) {
    // Reviso si la ruta absoluta es archivo o no
    const esUnArchivo = esArchivo(rutaAbsoluta);
    // Si es un archivo
    if (esUnArchivo) {
  }
    // Si no es un archivo
    else {

    }
    console.log(esUnArchivo);
  }
};

mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/src/app.js');
