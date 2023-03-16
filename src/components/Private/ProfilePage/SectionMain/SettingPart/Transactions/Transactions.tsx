import React from 'react';
import TransactionList from "./TransactionList/TransactionList";
import classes from './Transactions.module.scss'
const Transactions = () => {
    return (
        <>
            <h4 className={classes.transactionsTitle}>Transactions</h4>
                <TransactionList/>
        </>
    );
};

export default Transactions;