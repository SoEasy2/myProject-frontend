import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss'
const NotFound = () => {
    return (
            <div className={classes.not}>
                <div className={classes.notfound}>
                    <div className={classes.notfound404}>
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily
                        unavailable.</p>
                    <Link to={'/'} className={classes.link}>
                        Go To Homepage
                    </Link>
                </div>
            </div>
    );
};

export default NotFound;