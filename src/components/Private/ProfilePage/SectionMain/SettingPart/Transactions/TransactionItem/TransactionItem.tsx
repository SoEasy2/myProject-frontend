import React from 'react';
import classes from './TransactionItem.module.scss'
import {API_URL} from "../../../../../../../http/requests/requests";
interface IProps{
    name:string;
    img:string;
    price:string;
    date:string
}
const TransactionItem:React.FC<IProps> = ({name,img,price,date}) => {
    return (
        <tr className={classes.tr}>
            <td><img className={classes.img} src={`${API_URL}${img}`}></img></td>
            <td>{name}</td>
            <td>{price}$</td>
            <td>{date}</td>
        </tr>
    );
};

export default TransactionItem;