import React from 'react';
import classes from './Logo.module.scss'
import {Link} from 'react-router-dom'

const Logo:React.FC = () => {
    return (
        <div className={classes.logoWrap}>
            <Link to={'/store'}>
            <a href={'#'} data-text='MY PROJECT' className={classes.glitch}>MY PROJECT</a>
            </Link>
        </div>
    );
};

export default Logo;