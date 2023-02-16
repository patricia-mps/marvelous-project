import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './CardSkeleton.module.scss';
import Props from './CardSkeleton.types';

const CardSkeleton: FC<Props> = ({ cards }: Props): JSX.Element => {
  const CardSkeletonArray = Array(cards).fill(0);

  return (
    <>
      {CardSkeletonArray.map((item: number, index: number) => (
        <Skeleton
          key={index}
          containerTestId="cardSkeleton"
          className={style.component}
          width={`100%`}
          height={350}
        />
      ))}
    </>
  );
};

export default CardSkeleton;
