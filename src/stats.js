export const stats = (arrMd) => {
  let arrUnico = arrMd.map(element => element.href);
  arrUnico = [...new Set(arrUnico)];
  return `Total: ${arrMd.length} Unique: ${arrUnico.length}`;
};

export const statsValidate = (arrMd) => {
  const arrUnico = [...new Set(arrMd.map(element => element.href))];
  const arrBroken = [];
  arrMd.forEach((element) => {
    if (element.statusText !== 'OK') {
      arrBroken.push(element.statusText);
    }
  });
  return `Total: ${arrMd.length} Unique: ${arrUnico.length} broken: ${arrBroken.length}`;
};
