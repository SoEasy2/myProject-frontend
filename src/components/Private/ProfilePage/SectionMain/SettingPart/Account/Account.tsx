import React from 'react';
import classes from './Account.module.scss'
import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";



const Account:React.FC = ({children}) => {
    return (
        <>

            <h4 className={classes.accountTitle}>Account</h4>
                <Avatar/>
                <div className={classes.wrapperInput}>
                <Input name={'name'} text={'Display name'} desk={'Visible to other members'} disabled={false}/>
                <Input name={'her znaet'} text={'Poke her znaet'} desk={'Ne znau'} disabled={false}/>
                </div>
            <hr className={classes.hr}/>
                <div className={classes.wrapperInput}>
                <Input name={'email'} text={'Email address'} desk={'For logging in'} disabled={true}/>
                <Input name={'phone'} text={'Phone number'} desk={'For communication with buyers'} disabled={false}/>
                </div>
            <hr className={classes.hr}/>
            <div className={classes.wrapperBtn}>
                <button className={classes.save}>Save change</button>
            </div>

        </>
    );
};

export default Account;