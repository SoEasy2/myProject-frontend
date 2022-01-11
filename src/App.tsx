import React, {useEffect} from 'react';
import MainPage from "./Pages/MainPage";
import Loading from "./components/Global/Loading/Loading";
import HomePage from "./Pages/HomePage";
import {useAppDispatch} from "./hooks/redux";
import {checkAuth, getConfirmProduct} from "./redux/reducers/ActionCreators";
import {Routes, Route} from 'react-router-dom'
import ProfilePage from "./Pages/ProfilePage";
import Profile from "./components/Private/ProfilePage/Profile";
import CreateAdPage from "./Pages/CreateAdPage";
import AdminPage from "./Pages/AdminPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import Account from "./components/Private/ProfilePage/SectionMain/SettingPart/Account/Account";

import Transactions from "./components/Private/ProfilePage/SectionMain/SettingPart/Transactions/Transactions";
import Logs from "./components/Private/ProfilePage/SectionMain/SettingPart/Logs/Logs";
import Password from "./components/Private/ProfilePage/SectionMain/SettingPart/Password/Password";
import Actions from "./components/Private/ProfilePage/SectionMain/SettingPart/Actions/Actions";
import ModalProduct from "./components/Global/ModalProduct/ModalProduct";
import Home from "./components/Private/AdminPage/Contents/Home/Home";
import UserList from "./components/Private/AdminPage/Contents/UserList/UserList";
import ProductList from "./components/Private/AdminPage/Contents/ProductList/ProductList";



function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if (localStorage.getItem('token')) dispatch(checkAuth())
        dispatch(getConfirmProduct());
    },[])
    return (
    <div >
        <Routes>
            <Route path='*' element={<NotFoundPage/>} />
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/store'} element={<MainPage/>}/>
            <Route path={'/profile/account'} element={<ProfilePage><Account/></ProfilePage>}/>
            <Route path={'/profile/password'} element={<ProfilePage><Password/></ProfilePage>}/>
            <Route path={'/profile/logs'} element={<ProfilePage><Logs/></ProfilePage>}/>
            <Route path={'/profile/transactions'} element={<ProfilePage><Transactions/></ProfilePage>}/>
            <Route path={'/profile/actions'} element={<ProfilePage><Actions/></ProfilePage>}/>
            <Route path={'/create-ad'} element={<CreateAdPage/>}/>
            <Route path={'/reset-password/:link'} element={<ResetPasswordPage/>}/>
            <Route path={'/store/:product'} element={<MainPage><ModalProduct/></MainPage>}/>
            <Route path={'/admin'} element={<AdminPage><Home/></AdminPage>}/>
            <Route path={'/admin/users'} element={<AdminPage><UserList/></AdminPage>} />
            <Route path={'/admin/products'} element={<AdminPage><ProductList/></AdminPage>}/>

        </Routes>

    </div>
  );
}

export default App;
