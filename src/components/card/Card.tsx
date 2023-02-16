import { FC, memo } from 'react';
import style from './Card.module.scss';
import Props from './Card.types';
import Button from '../button';
import Bubble from '../bubble';

const Card: FC<Props> = ({
  id,
  thumbnail,
  name,
  description,
  isNew,
  dataTesteId = 'card',
  onClickCard,
  onClickRemove,
}: Props): JSX.Element => {
  const handleRemoveItem = (e: any): void => {
    e.stopPropagation();
    onClickRemove(Number(id));
  };

  const handleClickCard = (e: any): void => {
    e.stopPropagation();
    if(isNew !== undefined) onClickCard(`${id}`, isNew);
  }

  return (
    <article
      className={style.component}
      title={name}
      onClick={handleClickCard}
      style={{ backgroundImage: `url(${thumbnail})` }}
      data-testid={dataTesteId}
    >
      {isNew && (
        <div className={style.new}>
          <Bubble highlight={true} body={<>New</>} />
        </div>
      )}
      <Button type="danger" text="X" onClick={e => handleRemoveItem(e)} />
      <section className={style.name}>{name}</section>
      <section className={style.description}>
        <span>{description ? description : 'Description not available'}</span>
      </section>
    </article>
  );
};

export default memo(Card);
