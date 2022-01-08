import React from 'react';
import classes from './Password.module.scss'
import Input from "../Input/Input";
const Password:React.FC = ({children}) => {
    return (
        <>
            <h4 className={classes.passwordTitle}>Password</h4>
            {children}
            <div className={classes.wrapperInput}>
                <Input name={'recEmail'} text={'Email addres'} desk={'For logging in'} disabled={true}/>
                <Input name={'curPass'} text={'Current password'} desk={'Date of last password change: 15.04.2003'} disabled={false}/>
            </div>
            <hr className={classes.hr}/>
            <div className={classes.wrapperInput}>
                <Input name={'newPass'} text={'New password'} desk={''} disabled={false}/>
                <Input name={'confNewPass'} text={'Confirm new password'} desk={''} disabled={false}/>
            </div>
            <hr className={classes.hr}/>
            <div className={classes.wrapperBtn}>
                <button className={classes.save}>Save change</button>
            </div>
        </>
    );
};

export default Password;