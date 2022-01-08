import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import adminReducer from './reducers/AdminSlice'
import productReducer from './reducers/ProductSlice'

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    productReducer

})
export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']