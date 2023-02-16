import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import InitialState from './charactersSlice.types';
import Character from '../../interfaces/character';
import slimCharactersData from '../../utils/functions/slimCharactersData';
import calcNewCharacterId from '../../utils/functions/calcNewCharacterId';

const marvel_api_keys = `apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}&ts=${process.env.REACT_APP_API_TS}`;

export const getCharactersList = createAsyncThunk('list', async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}characters?${marvel_api_keys}&limit=20&orderBy=name`
  );
  return { ...response.data.data };
});

export const getCharacterById = createAsyncThunk('character', async (id: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}characters/${id}?${marvel_api_keys}`
  );
  return { ...response.data.data };
});

const initialState: InitialState = {
  items: [],
  item: {},
  loading: false,
  isUnsuccessful: false,
  message: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      const newCharacter = {
        ...action.payload,
        id: calcNewCharacterId(state.items),
      };
      state.items.unshift(newCharacter);

      toast.success(`${newCharacter.name} added successfully!`);
    },
    editCharacter: (state, action: PayloadAction<Character>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;

      toast.success(`The character was edited successfully!`);
    },
    removeCharacter: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((character: Character) => character.id !== action.payload);

      toast.success(`The character was removed successfully!`);
    },
  },
  extraReducers: {
    [getCharactersList.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getCharactersList.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.isUnsuccessful = false;
      const { results } = payload;
      let charactersList: Character[] = [...results.map((items: any) => slimCharactersData(items))];
      state.items = charactersList;
    },
    [getCharactersList.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.isUnsuccessful = true;
      state.message = 'Something went wrong!';
    },
    [getCharacterById.pending.type]: (state, action) => {
      state.loading = true;
    },
    [getCharacterById.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.isUnsuccessful = false;
      const { results } = payload;
      let character: Character = slimCharactersData(results[0]);
      state.item = character;
    },
    [getCharacterById.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.isUnsuccessful = true;
      state.message = 'Something went wrong!';
    },
  },
});

export const { addCharacter, editCharacter, removeCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
