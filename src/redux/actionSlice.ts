import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Node } from '@/types';

interface StateType {
  name: '' | 'add' | 'edit' | 'delete';
  payload: Node | null;
}

const initialState: StateType = {
  name: '',
  payload: null,
};

const graphSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    openAction: (state, action: PayloadAction<StateType>) => {
      state.name = action.payload.name;
      state.payload = action.payload.payload;
    },
    closeAction: (state) => {
      state.name = '';
      state.payload = null;
    },
  },
});

export const { openAction, closeAction } = graphSlice.actions;

export default graphSlice.reducer;
