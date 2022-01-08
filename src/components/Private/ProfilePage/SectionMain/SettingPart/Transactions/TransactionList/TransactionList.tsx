import React from 'react';
import TransactionItem from "../TransactionItem/TransactionItem";
import classes from './TransactionList.module.scss'
const TransactionList = () => {
    return (
        <table className={classes.table}>
            <thead>
            <tr className={classes.tr}>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Data transaction</th>
            </tr>
            </thead>
            <tbody>
            <TransactionItem/>
            <TransactionItem/>
            </tbody>
        </table>
    );
};

export default TransactionList;