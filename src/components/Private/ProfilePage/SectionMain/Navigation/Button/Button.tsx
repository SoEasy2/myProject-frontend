import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.scss'

interface IProps{
    name:string;
    handleParts(name:string):void;
    part:string;
}

const Button:React.FC<IProps> = ({name, part, handleParts}) => {
    return (
        <Link to={`/profile/${name.toLowerCase()}`}>
         <button className={part === name ? `${classes.button} ${classes.active}` : `${classes.button}`} name={name} onClick={()=>handleParts(name)}>{name}</button>
        </Link>
    );
};

export default Button;