import React from 'react';
import Search from "./Search/Search";
import classes from './Header.module.scss'
import Logo from "../../../Global/Logo/Logo";
import Container from "../../../Global/Container/Container";
import HeaderBtns from "./Btns/HeaderBtns";
import Profile from "./Profile/Profile";
const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.wrapper}>
                    <Logo/>
                    <Search/>
                    <HeaderBtns/>
                    <Profile/>
                </div>
            </Container>

        </header>
    );
};

export default Header;