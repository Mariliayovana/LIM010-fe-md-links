// eslint-disable-next-line jest/no-disabled-tests
import path from 'path';

export const routeAbsolute = route => path.resolve(route);

export const isRouteAbsolute = path.isAbsolute();

export const fileIsMd = route => path.extname(route) === 'md';
