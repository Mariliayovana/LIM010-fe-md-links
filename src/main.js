export const main = (route) => {
  let absRoute = route;
  if (!isRouteAbsolute(absRoute)) {
    absRoute = routeAbsolute(absRoute);
  }
};
