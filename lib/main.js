"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

const main = route => {
  let absRoute = route;

  if (!isRouteAbsolute(absRoute)) {
    absRoute = routeAbsolute(absRoute);
  }
};

exports.main = main;