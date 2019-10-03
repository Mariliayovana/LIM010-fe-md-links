import marked from 'marked';
import { leerArchivo } from './filesystem';

export const obtenerArrayMdLinks = (arrPaths) => {
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
