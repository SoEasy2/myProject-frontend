import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface IUserState{
    refreshToken:string | null,
    accessToken:string | null,
    user:IUser | null,
    isLoading:boolean,
    error:string | null;
}
interface IPayloadLogin{
    user:IUser | null,
    refreshToken:string | null,
    accessToken:string | null,
}
const initialState:IUserState = {
    refreshToken:null,
    accessToken:null,
    user:null,
    isLoading:false,
    error: null,
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userRegisterFetching(state){
            state.isLoading = true;
        },
        userRegisterSuccess(state){
            state.isLoading = false;
            state.error = null;
        },
        userRegisterError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },

        userLoginFetching(state){
            state.isLoading = true;
        },
        userLoginSuccess(state, action:PayloadAction<IPayloadLogin>){
            state.isLoading = false;
            state.error = null;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },
        userLoginError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        userLogoutFetching(state){
            state.isLoading = true;
        },
        userLogoutSuccess(state){
            state.isLoading = false;
            state.error = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
        },
        userLogoutError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default userSlice.reducer;