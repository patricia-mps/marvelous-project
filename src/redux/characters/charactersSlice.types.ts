import Character from '../../interfaces/character';

interface InitialState {
  items: Character[];
  item: Character;
  loading: boolean;
  isUnsuccessful: boolean;
  message: string;
}

export default InitialState;
