import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './products';

export default configureStore({
    reducer: {
        products: productSlice,
    }
})