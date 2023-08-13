import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("fetchProduct", async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products"
  );
  return res.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoding: false,
    data: [],
    isError: false,
  },
  reducers: {
    addProduct: (state, action) => {
     state.data.unshift(action.payload);
    },
    removeProduct:(state,action)=>{
      const filterRemove =state.data.filter((item)=>item.id !== action.payload)
        state.data = filterRemove 
    },
    editProduct:(state,action)=>{
      const findElement = state.data.findIndex((item)=>item.id !== action.payload.id)
      state.data[findElement] = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoding = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const { addProduct,removeProduct,editProduct} = productSlice.actions;
export default productSlice.reducer;
