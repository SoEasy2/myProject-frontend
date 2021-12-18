import React from 'react';
import CardItem from "./CardItem/CardItem";
import classes from './CardList.module.scss'
const CardList = () => {
    return (
        <div className={classes.list}>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/><CardItem/>

        </div>
    );
};

export default CardList;