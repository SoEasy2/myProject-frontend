import React, {useEffect, useState} from 'react';
import Profile from "../components/Private/ProfilePage/Profile";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";

const ProfilePage:React.FC = ({children}) => {
    const {user} = useAppSelector(state => state.userReducer)
    return (
        <>
            <Profile>
                {children}
            </Profile>
        </>
    );
};

export default ProfilePage;