import React, {useEffect, useState} from 'react';
import ModalAuth from "../../Global/ModalAuth/ModalAuth";
import Header from "./Header/Header";
import SectionMain from "./SectionMain/SectionMain";
import classes from './Main.module.scss'
import {useNavigate, useParams} from "react-router-dom";


const Main:React.FC = ({children}) => {
    const [isAuthShow, setAuthShow] = useState<boolean>(false)
    return (
        <div className={classes.wrapper}>
            {children}
            <ModalAuth isShow={isAuthShow} setShow={setAuthShow}/>
            <Header setAuthShow={setAuthShow}/>
            <SectionMain/>
        </div>
    );
};

export default Main;