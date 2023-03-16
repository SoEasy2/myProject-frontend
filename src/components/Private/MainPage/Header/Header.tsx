import React from 'react';
import Search from "./Search/Search";
import classes from './Header.module.scss'
import Logo from "../../../Global/Logo/Logo";
import Container from "../../../Global/Container/Container";
import HeaderBtns from "./Btns/HeaderBtns";
import Profile from "./Profile/Profile";
import {useAppSelector} from "../../../../hooks/redux";


interface IProps{
    setAuthShow(obj:boolean):void
}
const Header:React.FC<IProps> = ({setAuthShow}) => {
    const {user, isLoading} = useAppSelector(state=>state.userReducer)
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.wrapper}>
                    <Logo/>
                    <Search/>
                    <HeaderBtns setAuthShow={setAuthShow}/>
                    {user && !isLoading ? <Profile/> : null}
                </div>
            </Container>
        </header>
    );
};

export default Header;