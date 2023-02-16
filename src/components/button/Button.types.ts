interface Props {
  type?: 'success' | 'secondary' | 'danger';
  dataTesteId?: string;
  disabled?: boolean;
  text: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default Props;
