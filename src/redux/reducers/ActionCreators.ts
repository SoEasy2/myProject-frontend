import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import {userSlice} from './UserSlice'
import {adminSlice} from "./AdminSlice";
import $api from "../../http";
import axios from "axios";
import {API_URL} from "../../http/requests/requests";
import {productSlice} from "./ProductSlice";
interface IRegisterUser{
    email:string,
    password:string;
    name:string
}
interface ILoginUser{
    email:string,
    password:string;
}
interface IDataLogin{
    user:IUser | null,
    refreshToken:string | null,
    accessToken:string | null,
}
export const authRegister = (dto:IRegisterUser) => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userRegisterFetching())
        const response = await $api.post('api/register', dto)
        if(response.status == 422){
            dispatch(userSlice.actions.userRegisterError('ERROR'))
        }else{
            dispatch(userSlice.actions.userRegisterSuccess())
        }
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userRegisterError(err))
    }
}

export const authLogin = (dto:ILoginUser) => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userLoginFetching())
        const response = await $api.post<IDataLogin>('api/login',dto)
        localStorage.setItem('token', response.data.accessToken ? response.data.accessToken : '');
        dispatch(userSlice.actions.userLoginSuccess(response.data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userLoginError(err))
    }
}
export const authLogout = () => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userLogoutFetching())
        const response = await $api.post<null>('api/logout',{})
        localStorage.removeItem('token');
        dispatch(userSlice.actions.userLogoutSuccess())
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userLogoutError(err))
    }
}
export const checkAuth = () => async (dispatch:AppDispatch)=>{
    try{
        dispatch(userSlice.actions.userLoginFetching())
        const response = await axios.get<IDataLogin>(`${API_URL}api/refresh`,{withCredentials:true})
        localStorage.setItem('token', response.data.accessToken ? response.data.accessToken : '');
        dispatch(userSlice.actions.userLoginSuccess(response.data))
    } catch (e) {
        const err = (e as Error).message
        dispatch(userSlice.actions.userLoginError(err))
    }
}
export const uploadImg = (dto:any) => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userLoginFetching())
        const response = await $api.post<IDataLogin>('api/upload',dto)
        localStorage.setItem('token', response.data.accessToken ? response.data.accessToken : '');
        dispatch(userSlice.actions.userLoginSuccess(response.data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userLoginError(err))
    }
}
export const updateUser = (dto:any) =>async (dispatch:AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userLoginFetching())
        const response = await $api.post<IDataLogin>('api/update-user',dto)
        localStorage.setItem('token', response.data.accessToken ? response.data.accessToken : '');
        dispatch(userSlice.actions.userLoginSuccess(response.data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userLoginError(err))
    }
}
export const createProduct = (dto:any) => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.userLoginFetching())
        const response = await $api.post<IDataLogin>('api/create-product',dto)
        localStorage.setItem('token', response.data.accessToken ? response.data.accessToken : '');
        dispatch(userSlice.actions.userLoginSuccess(response.data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(userSlice.actions.userLoginError(err))
    }
}








export const getProduct = () => async (dispatch:AppDispatch) =>{
    try{
        dispatch(adminSlice.actions.getProductFetching())
        const {data} = await $api.post('api/admin/getProduct',{})
        dispatch(adminSlice.actions.getProductSuccess(data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(adminSlice.actions.getProductError(err))
    }
}
export const confirmProduct = (id:string) => async (dispatch:AppDispatch) =>{
    try{
        dispatch(adminSlice.actions.confirmProductFetching)
        const {data} = await $api.post('api/admin/confirm-product',{_id:id})
        dispatch(adminSlice.actions.confirmProductSuccess(data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(adminSlice.actions.confirmProductError(err))
    }
}

export const getConfirmProduct = () => async (dispatch:AppDispatch) =>{
    try{
        dispatch(productSlice.actions.getConfirmProductFetching())
        const {data} = await $api.get('api/get-product')
        dispatch(productSlice.actions.getConfirmProductSuccess(data))
    }catch (error) {
        const err = (error as Error).message
        dispatch(productSlice.actions.getConfirmProductError(err))
    }
}

