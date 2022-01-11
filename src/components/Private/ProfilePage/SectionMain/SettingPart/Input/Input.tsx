import React from 'react';
import classes from './Input.module.scss'
interface IProps{
    name:string;
    text:string;
    desk:string;
    disabled:boolean;
    inputChangeHandler?(e:any):void
    value?:string
    onChange?():void
}
const Input:React.FC<IProps> = ({onChange,name, text,value,desk, disabled, inputChangeHandler}) => {
    return (
        <div>
            <div className={classes.wrapper}>
                <label className={classes.name}>{text}</label>
                <label className={classes.desk}>{desk}</label>
            </div>
            <input type="text" name={name} value={value ? value : ''}  className={classes.input} onChange={e=>inputChangeHandler ? inputChangeHandler(e) : null} disabled={disabled}/>
        </div>
    );
};

export default Input;