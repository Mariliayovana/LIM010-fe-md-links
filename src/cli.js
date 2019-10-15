#!/usr/bin/env node

import { mdLinksCli } from './index.js';

const rutaCli = process.argv[2];
const opcion = {
  val: process.argv[3],
  stat: process.argv[4],
};
mdLinksCli(rutaCli, opcion).then((valor) => {
  console.log(valor);
});
