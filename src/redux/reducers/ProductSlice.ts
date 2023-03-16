import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../models/IProduct";
import {boolean} from "yup";


interface IProductState {
    error:string | null;
    isLoading: boolean;
    products: IProduct[] | null
}

const initialState:IProductState = {
    error:null,
    isLoading:false,
    products:null

}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getConfirmProductFetching(state){
            state.isLoading = true;
        },
        getConfirmProductSuccess(state, action:PayloadAction<IProduct[]>){
            state.products = [...action.payload]
            state.isLoading = false;
            state.error = null;
        },
        getConfirmProductError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default productSlice.reducer;