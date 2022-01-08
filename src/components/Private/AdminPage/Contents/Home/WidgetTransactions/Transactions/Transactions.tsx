import React from 'react';
import classes from './Transactions.module.scss'

interface IButton{
    type:string
}
const Transactions = () => {
    const Button:React.FC<IButton> = ({ type }) => {
        return <button className={`${classes.widgetTransactionsButton} ${classes.Approved}`}>{type}</button>;
    };
    return (
        <tr className="widgetLgTr">
            <td className={classes.widgetTransactionsUser}>
                <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className={classes.widgetTransactionsImg}
                />
                <span className={classes.widgetTransactionsEmail}>kjlkjda43@mail.ru</span>
            </td>
            <td className={classes.widgetTransactionsDate}>2 Jun 2021</td>
            <td className={classes.widgetTransactionsAmount}>$122.00</td>
            <td className={classes.widgetTransactionsStatus}>
                <Button type="Approved" />
            </td>
        </tr>
    );
};

export default Transactions;