import React, {useEffect, useState} from 'react';
import classes from './WidgetTransactions.module.scss'
import Transactions from "./Transactions/Transactions";
import $api from "../../../../../../http";
const WidgetTransactions = () => {
    const [transactions, setTransactions] = useState<Array<any>>([])
    useEffect(()=>{
        (async ()=>{
          const {data} = await $api.get('api/admin/lastTransactions');
          setTransactions(data)
            console.log(data)
        })()
    },[])
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
                {transactions.length ? transactions.map(item=> <Transactions email={item.user.email} avatar={item.user.avatar} price={item.price} key={item.id} date={item.date}/>) :null}
            </table>
        </div>
    );
};

export default WidgetTransactions;