import React from 'react';
import classes from './Filters.module.scss'
import filters from './assets/filters.svg'
import InputPrice from "./InputPrice/InputPrice";
import BtnCondition from "./BtnCondition/BtnCondition";
import BtnSeller from "./BtnSeller/BtnSeller";

const Filters = () => {
    return (
        <div className={classes.filterWrapper}>
            <button className={classes.filter}><img src={filters} alt="filters"/><div>Filters</div></button>
            <form action="" className={classes.form}>
                <label className={classes.label}>Price
                    <div className={classes.content}>
                    <InputPrice name={'from'} placeholder={'From'}/>
                    <InputPrice name={'to'} placeholder={'To'}/>
                    </div>
                </label>
                <label className={classes.label}>Condition
                    <div className={classes.content}>
                        <BtnCondition name={'any'} text={'Any'}/>
                        <BtnCondition name={'used'} text={'Used'}/>
                        <BtnCondition name={'new'} text={'New'}/>
                    </div>
                </label>
                <label className={classes.label}>Seller
                    <div className={classes.content}>
                        <BtnSeller name={'any'} text={'Any'}/>
                        <BtnSeller name={'private'} text={'Private person'}/>
                        <BtnSeller name={'company'} text={'Company'}/>
                    </div>
                </label>
                <hr/>
                <button className={classes.results}>Show results(<span>50</span>)</button>
            </form>
        </div>
    );
};

export default Filters;