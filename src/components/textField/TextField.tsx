import { FC } from 'react';
import style from './TextField.module.scss';
import Props from './TextField.types';

const TextField: FC<Props> = ({
  label,
  helper,
  name,
  max,
  min,
  placeholder = '',
  type = 'text',
  value,
  dataTestId = 'textField',
  errorMessage,
  hasError,
  readonly,
  disabled,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  return (
    <div className={`${style.component} ${hasError && style.invalid}`} data-testid={dataTestId}>
      <label>{label}</label>
      <span className={style.helper}>{helper}</span>
      <div className={style.input}>
        <input
          className="text-field__input"
          aria-label="text-input"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          max={max}
          min={min}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
        {hasError && <span className={style.error}>{errorMessage}</span>}
      </div>
    </div>
  );
};

export default TextField;
