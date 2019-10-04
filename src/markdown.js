import marked from 'marked';
import { leerArchivo } from './filesystem';
import { obtenerArrayMd } from './index.js';

export const obtenerArrayMdLinks = (rout) => {
  const arrPaths = obtenerArrayMd(rout); // array de .md
  const arrLinks = [];
  arrPaths.forEach((filePath) => {
    const markdownContent = leerArchivo(filePath).toString();
    // obtengo una reference const renderer = new myMarked.Renderer();
    const renderer = new marked.Renderer();
    // Cuando encuentro un enlace en markdownContent, lo agrego a arrLinks
    renderer.link = (href, _, text) => {
      arrLinks.push({ href, text, file: filePath });
    };
    marked(markdownContent, { renderer });
  });

  return arrLinks;
};
// console.log(obtenerArrayMdLinks('../LIM010-fe-md-links/prueba'));
