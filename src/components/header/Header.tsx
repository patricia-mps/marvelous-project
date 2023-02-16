import { FC, memo } from 'react';
import style from './Header.module.scss';

const Header: FC = (): JSX.Element => (
  <header className={style.component} data-testid="header">
    <h2>This is a </h2>
    <h1>
      <span>MARVEL</span>
      <span>OUS</span>
    </h1>
    <h2>Project</h2>
  </header>
);

export default memo(Header);
