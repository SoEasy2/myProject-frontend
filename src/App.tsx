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
            <Route path={'/admin'} element={<AdminPage/>}/>
            <Route path={'/reset-password/:link'} element={<ResetPasswordPage/>}/>

        </Routes>

    </div>
  );
}

export default App;
