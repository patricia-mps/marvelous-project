interface Props {
  label?: string;
  helper?: string;
  name?: string;
  max?: string;
  min?: string;
  placeholder?: string;
  type?: string;
  value: string;
  dataTestId?: string;
  errorMessage?: string;
  hasError?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default Props;
