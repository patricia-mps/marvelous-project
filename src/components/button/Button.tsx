import { FC, memo } from 'react';
import style from './Button.module.scss';
import Props from './Button.types';

const Button: FC<Props> = ({
  type = 'success',
  dataTesteId = 'button',
  disabled = false,
  text,
  onClick,
}: Props): JSX.Element => (
  <button
    type="button"
    className={`${style.component} ${style[type]}`}
    onClick={onClick}
    disabled={disabled}
    data-testid={dataTesteId}
  >
    {text}
  </button>
);

export default memo(Button);
