import React from 'react';
import classes from './TransactionItem.module.scss'
const TransactionItem = () => {
    return (
        <tr className={classes.tr}>
            <td><div className={classes.img}></div></td>
            <td>NAME TOVARA KUPIL</td>
            <td>150$</td>
            <td>13.13.2021</td>
        </tr>
    );
};

export default TransactionItem;