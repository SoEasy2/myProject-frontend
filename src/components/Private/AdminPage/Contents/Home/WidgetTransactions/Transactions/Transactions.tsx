import React from 'react';
import classes from './Transactions.module.scss'
import {API_URL} from "../../../../../../../http/requests/requests";

interface IButton{
    type:string
}
interface IProps{
    email:string;
    date:string;
    avatar:string;
    price:string
}
const Transactions:React.FC<IProps> = ({email, date, avatar,price}) => {
    const Button:React.FC<IButton> = ({ type }) => {
        return <button className={`${classes.widgetTransactionsButton} ${classes.Approved}`}>{type}</button>;
    };
    return (
        <tr className={classes.tr}>
            <td className={classes.widgetTransactionsUser}>
                <img
                    src={`${API_URL}${avatar}`}
                    alt=""
                    className={classes.widgetTransactionsImg}
                />
                <span className={classes.widgetTransactionsEmail}>{email}</span>
            </td>
            <td className={classes.widgetTransactionsDate}>{new Date(date).getDay()} {new Date(date).toLocaleString('default',{month:'long'})} {new Date(date).getFullYear()}</td>
            <td className={classes.widgetTransactionsAmount}>${price}</td>
            <td className={classes.widgetTransactionsStatus}>
                <Button type="Approved" />
            </td>
        </tr>
    );
};

export default Transactions;