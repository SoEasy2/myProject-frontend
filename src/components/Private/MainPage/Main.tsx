import React, {useState} from 'react';
import ModalAuth from "../../Global/ModalAuth/ModalAuth";
import Header from "./Header/Header";
import SectionMain from "./SectionMain/SectionMain";

const Main = () => {
    const [isAuthShow, setAuthShow] = useState<boolean>(false)
    return (
        <div>
            <ModalAuth isShow={isAuthShow} setShow={setAuthShow}/>
            <Header setAuthShow={setAuthShow}/>
            <SectionMain/>
        </div>
    );
};

export default Main;