import React from 'react';
import classes from './Logo.module.scss'

const Logo:React.FC = () => {
    return (
        <div className={classes.logoWrap}>
            <a href={'#'} data-text='MY PROJECT' className={classes.glitch}>MY PROJECT</a>
        </div>
    );
};

export default Logo;