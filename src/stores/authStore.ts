import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  uid: any;
};

const initialState: State = {
  uid: null
};

const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPosts(state: State, action: PayloadAction<any>) {
      state.uid = action.payload;
    },
  },
});

export const {
  setPosts,
} = authStore.actions;

export default authStore;
