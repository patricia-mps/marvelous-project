import '@testing-library/jest-dom';
import calcNewCharacterId from '.';

test('getRoute', () => {
  expect(calcNewCharacterId([{ id: 1 }])).toEqual(2);
});
