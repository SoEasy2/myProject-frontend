import React from 'react';
import Navigation from "./Navigation/Navigation";
import classes from "./Admin.module.scss"
import TopBar from "./TopBar/TopBar";


const Admin:React.FC = ({children}) => {
    return (
        <>
        <TopBar/>
        <div className={classes.wrapper}>
            <Navigation/>
            {children}
            {/*<Home/>*/}
           {/* <UserList/>*/}
        </div>
            </>
    );
};

export default Admin;