import React from 'react';

import classes from './Categories.module.scss'
interface IProps{
    name:string
    img:string
}
const Categories:React.FC<IProps> = ({name,img}) => {
    const svg = require(`./assets/${img}.svg`)
    return (
        <div className={`${classes.item}`}>
            <img src={svg.default} alt=""/>
            <p>{name}</p>
        </div>
    );
};

export default React.memo(Categories);