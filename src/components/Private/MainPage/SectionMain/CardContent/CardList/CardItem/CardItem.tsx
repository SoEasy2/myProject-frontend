import React from 'react';
import classes from './CardItem.module.scss'
import watch from './assets/unlike.png'
import {useNavigate} from "react-router-dom";
interface IProps{
    name:string;
    img:string;
    price:number;
    shortDescription:string;
    id:string
}
const CardItem:React.FC<IProps> = ({name,id, img, price,shortDescription}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(`/store/${id}`)
    }
    return (
        <div className={classes.temp} onClick={handleClick}>
                <img className={classes.cardImg} src={img}/>
                <h6 className={classes.titleCard}>{name}</h6>
                <p className={classes.price}>$<span>{price}</span></p>
                <p className={classes.desk}>{shortDescription}</p>

            <div className={classes.contentBottom}>
                <button className={classes.like}><img src={watch} alt="" className={classes.img}/>Watch</button>
            </div>
            </div>

    );
};

export default CardItem;