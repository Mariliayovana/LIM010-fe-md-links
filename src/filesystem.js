const fs = require('fs');

// si es archivo devuelve true, sino false
export const esArchivo = ruta => fs.lstatSync(ruta).isFile();

// si es directorio/carpeta devuelve true, sino false
export const esCarperta = ruta => fs.lstatSync(ruta).isDirectory();

// devuelve un array con todos los archivos de la ruta
export const leerDirectorio = ruta => fs.readdirSync(ruta, 'utf8');

// devuelve el contenido de un archivo
export const leerArchivo = ruta => fs.readFileSync(ruta, 'utf8');

// revisa si existe la ruta
export const existeRuta = ruta => fs.existsSync(ruta);
