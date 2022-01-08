import React from 'react';
import classes from './CardItem.module.scss'
import watch from './assets/unlike.png'
interface IProps{
    name:string;
    img:string;
    price:number;
    shortDescription:string
}
const CardItem:React.FC<IProps> = ({name, img, price,shortDescription}) => {
    return (
        <div className={classes.temp}>
                <img className={classes.cardImg} src={img}/>
                <h6 className={classes.titleCard}>{name}</h6>
                <p className={classes.price}>$<span>{price}</span></p>
                <p className={classes.desk}>{shortDescription}</p>

            <div className={classes.contentBottom}>
                <p className={classes.rated}>Rated:<span>5.0</span></p>
                <button className={classes.like}><img src={watch} alt="" className={classes.img}/>Watch</button>
            </div>
            </div>

    );
};

export default CardItem;