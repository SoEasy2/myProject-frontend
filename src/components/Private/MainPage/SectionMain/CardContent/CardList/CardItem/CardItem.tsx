import React from 'react';
import classes from './CardItem.module.scss'
import img from './assets/unlike.png'
const CardItem = () => {
    return (
        <div className={classes.temp}>
                <div className={classes.cardImg}></div>

                <h6 className={classes.titleCard}>Vintage Typewriter to post awesome stories about UI design and webdev.</h6>
                <p className={classes.price}>$<span>49.00</span></p>
                <p className={classes.desk}>Eligible for Shipping To Mars or somewhere else</p>

            <div className={classes.contentBottom}>
                <p className={classes.rated}>Rated:<span>5.0</span></p>
                <button className={classes.like}><img src={img} alt="" className={classes.img}/>Watch</button>
            </div>
            </div>

    );
};

export default CardItem;