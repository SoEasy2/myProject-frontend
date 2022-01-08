import React from 'react';
import CardItem from "./CardItem/CardItem";
import classes from './CardList.module.scss'
import {useAppSelector} from "../../../../../../hooks/redux";
const CardList = () => {
    const {products} = useAppSelector(state=>state.productReducer)
    return (
        <div className={classes.list}>
            {products ? products.map(item=> <CardItem key={item._id} name={item.name} price={item.price} img={item.img} shortDescription={item.shortDescription}/>
            ) : null}

        </div>
    );
};

export default CardList;