import React, {useEffect, useState} from 'react';
import Header from "./Header/Header";
import SectionMain from "./SectionMain/SectionMain";
import {useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";


const Profile:React.FC = ({children}) => {
    return (
        <section>
            <Header/>
            <SectionMain children={children}/>
        </section>
    );
};

export default Profile;