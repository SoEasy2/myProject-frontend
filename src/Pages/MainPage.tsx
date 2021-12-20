import React from 'react';
import Header from "../components/Private/MainPage/Header/Header";
import SectionMain from "../components/Private/MainPage/SectionMain/SectionMain";
import ModalAuth from "../components/Global/ModalAuth/ModalAuth";

const MainPage = () => {
    return (
        <>
            <ModalAuth/>
            <Header/>
            <SectionMain/>
        </>
    );
};

export default MainPage;