import React from 'react';
import classes from './InputPrice.module.scss'
interface IProps{
    name:string;
    placeholder:string
}
const InputPrice:React.FC<IProps> = ({name, placeholder}) => {
    return (
        <input type="number" className={classes.input} placeholder={placeholder} name={name} onClick={(event)=>{alert(name)}}/>
    );
};

export default React.memo(InputPrice);