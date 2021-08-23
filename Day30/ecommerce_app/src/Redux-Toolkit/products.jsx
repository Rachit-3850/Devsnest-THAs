import createSlice, { createAsyncThunk } from "@reduxjs/toolkit"
import getProducts from "../FetchPriducts"
export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        const data = await getProducts()
        console.log(data);
        return data
    }
)
const initialState = {
    products:[],
    status: null,
}
export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [loadProducts.pending]: (state , action) => {
            state.status = "pending"
        },
        [loadProducts.fulfilled]: (state , action) => {
            state.products=[...action.payload]
            state.status = "success"
        },
        [loadProducts.rejected]: (state , action) => {
            state.status = "failed"
        },
    }
})
export default productSlice.reducer