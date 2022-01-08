import React from 'react';
import classes from './User.module.scss'
const User = () => {
    return (
        <li className={classes.widgetUserListItem}>
            <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={classes.widgetUserImg}
            />
            <div className={classes.widgetUser}>
                <span className={classes.widgetUserName}>Anna Keller</span>
                <span className={classes.widgetUserEmail}>dskjhadso@mail.ru</span>
            </div>
        </li>
    );
};

export default User;