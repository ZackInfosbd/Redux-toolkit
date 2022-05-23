import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'carte',
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
