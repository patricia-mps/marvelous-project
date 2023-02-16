import Character from '../../../interfaces/character';

const calcNewCharacterId = (charactersLis: Character[]): any => {
  const arry = charactersLis.map(({ id }) => id).sort();

  let newId = arry.pop() || 1;
  if (newId) return newId + 1;
};

export default calcNewCharacterId;
