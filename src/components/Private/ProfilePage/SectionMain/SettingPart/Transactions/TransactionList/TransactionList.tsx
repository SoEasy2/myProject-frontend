import React, {useEffect, useState} from 'react';
import TransactionItem from "../TransactionItem/TransactionItem";
import classes from './TransactionList.module.scss'
import $api from "../../../../../../../http";
const TransactionList = () => {
    const [transactions, setTransactions] = useState<Array<any>>([])
    useEffect(()=>{
        (async()=>{
           const {data} = await $api.get('api/transactions-user')
            setTransactions(data)

        })()
    },[])
    return (
        <>
            {transactions.length ? <table className={classes.table}>
                <thead>
                <tr className={classes.tr}>
                    <th onClick={()=>console.log(transactions)}>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Data transaction</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(item=><TransactionItem name={item.product.name} date={item.date} price={item.price} img={item.product.img}/>)}
                </tbody>
            </table> : <h5 className={classes.notFound}>No transactions</h5>}
        </>
    );
};

export default TransactionList;