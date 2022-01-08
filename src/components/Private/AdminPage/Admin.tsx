import React from 'react';
import Navigation from "./Navigation/Navigation";
import classes from "./Admin.module.scss"
import TopBar from "./TopBar/TopBar";
import Home from "./Contents/Home/Home";
import UserList from "./Contents/UserList/UserList";
import ProductList from "./Contents/ProductList/ProductList";


const Admin = () => {
    return (
        <>
        <TopBar/>
        <div className={classes.wrapper}>
            <Navigation/>
            {/*<Home/>*/}
           {/* <UserList/>*/}
            <ProductList/>
        </div>
            </>
    );
};

export default Admin;