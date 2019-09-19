import { routAbsolute } from '../src/router.js';

describe('routAbsolute', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof routAbsolute).toBe('function');
  });
});
