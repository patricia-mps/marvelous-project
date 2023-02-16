import Character from '../../interfaces/character';

interface Props {
  objCharacter?: Character;
  editMode?: boolean;
  dataTestId?: string;
  onSubmit(form: any): void;
  onCancel(): void;
}

export default Props;
