import React from 'react';
import classes from './Input.module.scss'
interface IProps{
    name:string;
    text:string;
    desk:string;
    disabled:boolean;
}
const Input:React.FC<IProps> = ({name,text,desk, disabled}) => {
    return (
        <div>
            <div className={classes.wrapper}>
                <label className={classes.name}>{text}</label>
                <label className={classes.desk}>{desk}</label>
            </div>
            <input type="text" name={name}  className={classes.input} disabled={disabled}/>
        </div>
    );
};

export default Input;