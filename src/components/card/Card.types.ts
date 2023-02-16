import Character from '../../interfaces/character';

interface Props extends Character {
  isNew?: boolean;
  dataTesteId?: string;
  onClickCard(id: string, isNew: boolean): void;
  onClickRemove(id: number): void;
}

export default Props;
