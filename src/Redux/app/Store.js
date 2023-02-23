import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../features/ProductSlice'




const Store = configureStore({
    reducer:{
        products:ProductSlice
    }
})


export default Store;
