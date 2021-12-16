import React from 'react';
import classes from "./HeaderBtns.module.scss";
import plus from "./assets/plus.png";

const HeaderBtns = () => {
    return (
        <div>
            <button className={classes.ad}><img src={plus} alt="plus" className={classes.plus}/>Place an ad</button>
            <button className={classes.login}>Login</button>
        </div>
    );
};

export default HeaderBtns;