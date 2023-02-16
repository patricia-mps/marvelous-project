import { FC, memo } from 'react';
import style from './Modal.module.scss';
import Props from './Modal.types';

const Modal: FC<Props> = ({ title, body, footer, dataTesteId = 'modal' }: Props): JSX.Element => {
  return (
    <div className={style.component} data-testid={dataTesteId}>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>{title}</h2>
        </div>
        <div className={style.body}>{body}</div>
        <div className={style.footer}>{footer}</div>
      </div>
    </div>
  );
};

export default memo(Modal);
