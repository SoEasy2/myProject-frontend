import React from 'react';
import classes from './BtnSeller.module.scss'

interface IProps{
    name:string;
    text:string
}

const BtnSeller:React.FC<IProps> = ({name, text}) => {
    return (
        <button name={name} className={classes.btnSeller}>
            {text}
        </button>
    );
};

export default BtnSeller;