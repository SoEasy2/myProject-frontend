import React, {useEffect, useState} from 'react';
import Header from "../components/Private/MainPage/Header/Header";
import SectionMain from "../components/Private/MainPage/SectionMain/SectionMain";
import ModalAuth from "../components/Global/ModalAuth/ModalAuth";
import Main from "../components/Private/MainPage/Main";
import Loading from "../components/Global/Loading/Loading";

const MainPage = () => {
    const [isLoading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        setTimeout(()=>{
            (()=>{
               setLoading(false)
            })()
        },3000)
    },[])
    return (
        <>
            {isLoading ? <Loading/> : <Main/>}
        </>
    );
};

export default MainPage;