import React from 'react';
import classes from './WidgetTransactions.module.scss'
import Transactions from "./Transactions/Transactions";
const WidgetTransactions = () => {
    return (
        <div className={classes.widgetTransactions}>
            <h3 className={classes.widgetTransactionsTitle}>Latest transactions</h3>
            <table className={classes.widgetTransactionsTable}>
                <tr className="widgetLgTr">
                    <th className={classes.widgetTransactionsTh}>Customer</th>
                    <th className={classes.widgetTransactionsTh}>Date</th>
                    <th className={classes.widgetTransactionsTh}>Amount</th>
                    <th className={classes.widgetTransactionsTh}>Status</th>
                </tr>
                <Transactions/>
                <Transactions/>
                <Transactions/>
            </table>
        </div>
    );
};

export default WidgetTransactions;