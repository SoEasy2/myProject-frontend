import React from 'react';
import Container from "../../../Global/Container/Container";
import Logo from "../../../Global/Logo/Logo";
import Profile from "../../MainPage/Header/Profile/Profile";
import classes from './Header.module.scss'
const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.wrapper}>
                    <Logo/>
                    <Profile/>
                </div>
            </Container>
        </header>
    );
};

export default Header;