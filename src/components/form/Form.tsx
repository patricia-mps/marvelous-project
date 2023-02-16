import { FC, memo } from 'react';
import style from './Form.module.scss';
import Props from './Form.types';
import useInput from '../../utils/hooks/useInput';
import TextField from '../textField';
import Button from '../button';

const Form: FC<Props> = ({
  objCharacter,
  editMode = false,
  dataTestId = 'form',
  onSubmit,
  onCancel,
}: Props): JSX.Element => {
  const {
    value: valueName,
    isValid: isValidName,
    hasError: hasErrorName,
    valueChangeHandler: handleChangeName,
    inputBlurHandler: handleBlurName,
    reset: resetInputName,
  } = useInput(value => value.trim() !== '', objCharacter?.name);

  const {
    value: valueDescription,
    isValid: isValidDescription,
    hasError: hasErrorDescription,
    valueChangeHandler: handleChangeDescription,
    inputBlurHandler: handleBlurDescription,
    reset: resetInputDescription,
  } = useInput(value => value.trim() !== '', objCharacter?.description);

  const isFormValid: boolean = isValidName && isValidDescription;

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();
    onSubmit({
      id: objCharacter?.id || undefined,
      thumbnail: objCharacter?.thumbnail || process.env.REACT_APP_NO_IMAGE,
      name: valueName,
      description: valueDescription,
      new: objCharacter?.id ? objCharacter?.new : true,
    });
    resetInputName();
    resetInputDescription();
  };

  return (
    <form className={style.component} data-testid={dataTestId}>
      <div>
        {!editMode && (
          <TextField
            disabled={true}
            label="Thumbnail"
            value={process.env.REACT_APP_NO_IMAGE || ''}
            helper="(Because this is a demo, for now is not possible to add an image)"
            onChange={() => {}}
            onBlur={() => {}}
            errorMessage="Must provide a valid url image"
            dataTestId="input-thumbnail"
          />
        )}
        <TextField
          label="Name"
          value={valueName}
          onChange={handleChangeName}
          onBlur={handleBlurName}
          hasError={hasErrorName}
          errorMessage="Value must not be empty."
          dataTestId="input-name"
        />
        <TextField
          label="Description"
          value={valueDescription}
          onChange={handleChangeDescription}
          onBlur={handleBlurDescription}
          hasError={hasErrorDescription}
          errorMessage="Value must not be empty."
          dataTestId="input-description"
        />
        <footer>
          <Button text="Cancel" type="secondary" onClick={onCancel} />
          <Button disabled={!isFormValid} text="submit" onClick={formSubmissionHandler} />
        </footer>
      </div>
    </form>
  );
};

export default memo(Form);
