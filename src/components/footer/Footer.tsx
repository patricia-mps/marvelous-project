import { FC, memo } from 'react';
import style from './Footer.module.scss';

const Footer: FC = (): JSX.Element => (
  <footer className={style.component} data-testid="footer">
    <div className={style.container}>
      <p>Author: Patrícia Silva</p>
      <div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/patriciapsilva/" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/patricia-mps" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default memo(Footer);
