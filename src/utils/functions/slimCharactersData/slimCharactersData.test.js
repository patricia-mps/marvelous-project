import "@testing-library/jest-dom";
import slimCharactersData from ".";

const data = {
    id: 1,
    name: 'name',
    description: 'description',
    cover: '',
    thumbnail: {
      extension: 'jpg',
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16'
    }
  };

const result = {
    id: 1,
    name: 'name',
    description: 'description',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
    new: false,
  };

test("slimCharactersData", () => {
  expect(slimCharactersData(data)).toEqual(result);
});
