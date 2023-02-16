import { FC, memo } from 'react';
import style from './Bubble.module.scss';
import Props from './Bubble.types';

const Bubble: FC<Props> = ({
  dataTesteId = 'bubble',
  highlight = false,
  body,
}: Props): JSX.Element => (
  <div data-testid={dataTesteId} className={`${style.component} ${highlight && style.highlight}`}>
    {body}
  </div>
);
export default memo(Bubble);
