import React from 'react';
import classes from './WidgetUsers.module.scss'
import User from "./User/User";
const WidgetUsers = () => {
    return (
        <div className={classes.widgetUsers}>
            <span className={classes.widgetUsersTitle}>New Join Members</span>
            <ul className={classes.widgetUsersList}>
                <User/>
                <User/>
                <User/>
                <User/>
            </ul>
        </div>
    );
};

export default WidgetUsers;