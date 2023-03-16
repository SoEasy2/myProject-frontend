import React, {useState} from 'react';
import Account from "./Account/Account";
import classes from './SettingPart.module.scss'
import Avatar from "./Avatar/Avatar";
import Password from "./Password/Password";
import Transactions from "./Transactions/Transactions";

interface IProps{
    part:string
}
const SettingPart:React.FC<IProps> = ({part,children}) => {

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                {children}
            </div>
        </section>
    );
};

export default SettingPart;