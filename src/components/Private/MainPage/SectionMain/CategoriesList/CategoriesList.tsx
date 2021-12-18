import React from 'react';
import classes from './CategoriesList.module.scss'
import Categories from "./Categories/Categories";
import {categories} from "./Categories/ArrayCatogories";
const CategoriesList = () => {
    return (
        <div className={classes.wrapper}>
            {categories.map((item, index)=> <Categories name={item.name} img={item.img} key={index}/>)}


        </div>
    );
};

export default CategoriesList;