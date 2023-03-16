import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userSlice} from "./UserSlice";

interface IAdmin {
    products:any | null,
    isLoading:boolean,
    error:string | null
}

const initialState:IAdmin = {
    products:null,
    isLoading:false,
    error: null,
}

export const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
        getProductFetching(state){
            state.isLoading = true;
        },
        getProductSuccess(state, action:PayloadAction<any>){
            state.products = action.payload
            state.isLoading = false;
            state.error = null;
        },
        getProductError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        confirmProductFetching(state){
            state.isLoading = true;
        },
        confirmProductSuccess(state, action:PayloadAction<any>){
            state.products = action.payload
            state.isLoading = false;
            state.error = null;
        },
        confirmProductError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default adminSlice.reducer;