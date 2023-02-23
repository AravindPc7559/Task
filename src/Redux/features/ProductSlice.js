import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getProducts = createAsyncThunk('api/data', (id) => {
  return axios
    .post(
      'http://3.7.252.58:4001/product/getAllProduct',
      {
        limit: 100,
        page: 0,
        search: '',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Cookie:
            'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8',
        },
      },
    )
    .then((response) => {
      return response.data
    })
})

const initialState = {
  products: [],
  loading: false,
  error: '',
  count: 0,
  cartProducts: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    AddCartProduct: (state, action) => {
      state.count =state.cartProducts.length + 1;
      state.cartProducts.push(action.payload)
    },
    DeleteCartProduct: (state, action) => {
      state.count =state.cartProducts.length - 1;
      state.cartProducts = state.cartProducts.filter((item) => {
        return item !== action.payload
      })
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
        state.products = action.payload;
        state.loading = false;
    },
    [getProducts.pending]: (state) => {
        state.loading = true;
    },
    [getProducts.rejected]: (state) => {
        state.error = "Something went wrong. Please try again";
        state.loading = false;
    },
  },
})

export { getProducts }

export default productSlice.reducer

export const { DeleteCartProduct, AddCartProduct } = productSlice.actions