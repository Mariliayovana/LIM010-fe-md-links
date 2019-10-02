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

// si es archivo devuelve true, sino false
export const esArchivo = ruta => fs.lstatSync(ruta).isFile();

// si es directorio/carpeta devuelve true, sino false
export const esCarperta = ruta => fs.lstatSync(ruta).isDirectory();

// si el archivo es un markdown, se agrega (.md) devuelve true o false
export const esArchivoMd = route => path.extname(route) === '.md';


export const leerDirectorio = (ruta) => {
  const arrOfFilesOrDirs = fs.readdirSync(ruta, 'utf8');
  console.log(arrOfFilesOrDirs);
  return arrOfFilesOrDirs;
};

export const obtenerArrayMd = (ruta) => {
  const arrMd = [];

  if (esArchivo(ruta)) { // Si es un archivo
    // Revisar si es un markdown
    if (esArchivoMd(ruta)) {
      arrMd.push(ruta);
    }
  } else if (esCarperta(ruta)) { // Si es una carpeta
    const archivos = leerDirectorio(ruta);
    archivos.forEach((elem) => {
      const rutaAbsolutaMd = obtenerRutaAbsoluta(elem);
      if (esArchivoMd(rutaAbsolutaMd)) {
        arrMd.push(rutaAbsolutaMd);
      }
    });
  }

  return arrMd;
};

export const mdLinks = (ruta, opciones) => {
  // obtengo la ruta absoluta
  const rutaAbsoluta = obtenerRutaAbsoluta(ruta);

  // aqui es cuando se revisa si el archivo o ruta existe
  const rutaExiste = fs.existsSync(rutaAbsoluta);

  if (rutaExiste) {
    // Obtiene un array con las rutas de los markdown
    console.log(obtenerArrayMd(rutaAbsoluta));
  }
};

mdLinks('/home/marilia/Proyectos/LIM010-fe-md-links/archivos');
