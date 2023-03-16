import React from 'react';
import classes from './CardContent.module.scss'

import CardList from "./CardList/CardList";
import CardSettings from "./CardSettings/CardSettings";
const CardContent = () => {
    return (
        <div className={classes.cardWrapper}>
            <div className={classes.cardContainer}>
            <CardSettings/>
            <CardList/>
            </div>
        </div>
    );
};

export default CardContent;