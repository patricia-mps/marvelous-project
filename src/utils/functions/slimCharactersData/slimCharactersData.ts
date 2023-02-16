import Character from '../../../interfaces/character';

const slimCharactersData = (character: any): Character => {
  const { id, name, description, thumbnail } = character;

  return {
    id,
    name,
    description,
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    new: false,
  };
};

export default slimCharactersData;
