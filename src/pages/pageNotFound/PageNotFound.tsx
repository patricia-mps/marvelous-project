import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Bubble from '../../components/bubble';
import Button from '../../components/button/Button';

const PageNotFound: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Bubble
      highlight
      body={
        <>
          <h2>404</h2>
          <p>
            <strong>UPS!!!</strong>
          </p>
          <p>
            <strong>Page not found</strong>
          </p>
          <p>
            <Button type="danger" text="Bring me home" onClick={() => navigate('/')} />
          </p>
        </>
      }
    />
  );
};

export default PageNotFound;
