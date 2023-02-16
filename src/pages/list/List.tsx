import { FC, useEffect, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useDispatch from '../../utils/hooks/useDispatch';
import useSelector from '../../utils/hooks/useSelector';
import getRoute from '../../utils/functions/getRoute';
import {
  getCharactersList,
  removeCharacter,
  addCharacter,
} from '../../redux/characters/charactersSlice';
import Character from '../../interfaces/character';
import style from './List.module.scss';
import Card from '../../components/card';
import Modal from '../../components/modal';
import Button from '../../components/button';
import CardSkeleton from '../../components/cardSkeleton';
import Bubble from '../../components/bubble';
import { RemoveModal } from './List.types';
import Form from '../../components/form';

const initialValues = {
  removeModal: {
    show: false,
  },
};

const List: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const charactersList = useSelector(state => state.characters.items);
  const isLoading = useSelector(state => state.characters.loading);
  const isUnsuccessful = useSelector(state => state.characters.isUnsuccessful);
  const message = useSelector(state => state.characters.message);

  const [removeModal, setRemoveModal] = useState<RemoveModal>(initialValues.removeModal);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  useEffect(() => {
    if (charactersList.length === 0) dispatch(getCharactersList());
  }, []);

  const handleClickRemove = (id: number): void => {
    setRemoveModal({ show: true, characterId: id });
  };
  const handlClickCard = (id: string, isNew: boolean): void => {
    navigate(getRoute.DETAIL(id, isNew));
  };

  const handleCloseRemoveModal = (): void => {
    setRemoveModal(initialValues.removeModal);
  };

  const handleConfirmRemoveCharacter = (): void => {
    if (removeModal.characterId) dispatch(removeCharacter(removeModal.characterId));
    setRemoveModal(initialValues.removeModal);
  };

  const handleOnSubmitAddNewCharacter = (ObjNewCharacter: Character) => {
    setShowAddModal(false);
    dispatch(addCharacter(ObjNewCharacter));
  };

  const handleToggleAddModal = (): void => {
    setShowAddModal(!showAddModal);
  };

  if (isUnsuccessful)
    return (
      <Bubble
        highlight
        body={
          <>
            <h2>{message}</h2>
            <p>
              <strong>Character not found!!!</strong>
            </p>
            <p>
              <Button type="danger" text="Bring me home" onClick={() => navigate('/')} />
            </p>
          </>
        }
      />
    );

  return (
    <>
      <Bubble
        body={
          <>
            <p>You can create your own comic character :) How cool is this?</p>
            <Button type="danger" text="Click here" onClick={handleToggleAddModal} />
          </>
        }
      />

      {isLoading ? (
        <section className={style.component}>
          <CardSkeleton cards={8} />
        </section>
      ) : (
        <section className={`${style.component} ${charactersList.length === 0 && style.noGrid}`}>
          {charactersList.length > 0 ? (
            charactersList.map((character: Character) => (
              <Card
                key={character.id}
                id={character.id}
                thumbnail={character.thumbnail}
                name={character.name}
                description={character.description}
                isNew={character.new}
                onClickRemove={handleClickRemove}
                onClickCard={handlClickCard}
              />
            ))
          ) : (
            <div>
              <p>
                <i>"A blank page or canvas. So many possibilities."</i>
              </p>
              <p>--Stephen Sondheim</p>
            </div>
          )}
          {removeModal.show && (
            <Modal
              title="Do you really want to remove it?"
              footer={
                <>
                  <Button text="no" type="secondary" onClick={handleCloseRemoveModal} />
                  <Button text="yes" type="success" onClick={handleConfirmRemoveCharacter} />
                </>
              }
            />
          )}
          {showAddModal && (
            <Modal
              title="Add your custom Comic Character"
              body={
                <>
                  <Form
                    onSubmit={form => handleOnSubmitAddNewCharacter(form)}
                    onCancel={() => setShowAddModal(false)}
                  />
                </>
              }
            />
          )}
        </section>
      )}
    </>
  );
};

export default memo(List);
