import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import style from './Detail.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import useDispatch from '../../utils/hooks/useDispatch';
import useSelector from '../../utils/hooks/useSelector';
import Character from '../../interfaces/character';
import { getCharacterById, editCharacter } from '../../redux/characters/charactersSlice';
import Form from '../../components/form';
import Button from '../../components/button';
import Bubble from '../../components/bubble';

const initialValues = {
  character: {
    id: undefined,
    thumbnail: '',
    name: '',
    description: '',
    new: false,
  },
};

const Detail: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const charactersList = useSelector(state => state.characters.items);
  const characterItem = useSelector(state => state.characters.item);
  const isLoading = useSelector(state => state.characters.loading);
  const isUnsuccessful = useSelector(state => state.characters.isUnsuccessful);
  const message = useSelector(state => state.characters.message);

  const [character, setCharacter] = useState<Character>(initialValues.character);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { thumbnail, name, description }: Character = character;

  useEffect(() => {
    if(characterItem.id === Number(id)) setCharacter(characterItem)
  }, [characterItem]);

  useEffect(() => {
    const characterId: number = parseInt(`${id}`);
    if (id && charactersList.length > 0) {
      const characterInList = handleFindInCharactersList(id);
      if (!!characterInList) setCharacter(characterInList);
    }
    else if (id && id.includes('n') && charactersList.length === 0) setIsError(true);
    else dispatch(getCharacterById(characterId));
  }, [id, charactersList]);

  const handleFindInCharactersList = (id: string): Character | undefined => {
    const idExistsInCharactersList = charactersList.some(
      (character: Character) => character.id === parseInt(id)
    );
    if (idExistsInCharactersList)
      return charactersList.find((character: Character) => character.id === parseInt(id));
    return undefined;
  };

  const handleClickGoBack = (): void => {
    navigate(-1);
  };

  const handleToggleEditMode = (): void => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmitEditChanges = (ObjNewCharacter: Character): void => {
    dispatch(editCharacter(ObjNewCharacter));
    handleToggleEditMode();
  };

  if (isLoading)
    return (
      <section className={style.component}>
        <div className={style.body}>
          <div className={style.skeletonImage}>
            <Skeleton width={200} height={250} />
          </div>
          <div className={style.skeletonBody}>
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
          </div>
        </div>
      </section>
    );

  if (isUnsuccessful || isError)
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
    <section className={style.component}>
      <header>
        <Button text="< Go back" type="secondary" onClick={handleClickGoBack} />
        {!isEditMode && <Button text="Edit" type="success" onClick={handleToggleEditMode} />}
      </header>

      <div className={style.body}>
        <div className={style.image}>
          <img src={thumbnail} alt={name} width="80%" />
        </div>
        <div className={style.form}>
          {!isEditMode ? (
            <>
              <h3>Name</h3>
              <p>{name || ''}</p>
              <h3>Description</h3>
              <p>{description || 'Description not available'}</p>
            </>
          ) : (
            <Form
              editMode={isEditMode}
              objCharacter={character}
              onSubmit={handleSubmitEditChanges}
              onCancel={handleToggleEditMode}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Detail;
