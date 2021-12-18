import React from 'react';
import classes from './BtnCondition.module.scss'

interface IProps{
    name:string;
    text:string
}
const BtnCondition:React.FC<IProps> = ({text, name}) => {
    return (
        <button name={name} className={classes.btnCondition}>
            {text}
        </button>
    );
};

export default BtnCondition;