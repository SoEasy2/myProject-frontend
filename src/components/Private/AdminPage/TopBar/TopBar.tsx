import React from 'react';
import {Language, NotificationsNone, Settings} from "@mui/icons-material";
import classes from './TopBar.module.scss'
import {Link} from "react-router-dom";
const TopBar = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.topbarWrapper}>
                <div className={classes.topLeft}>
                    <Link className={classes.logo} to={'/store'}>MY PROJECT</Link>
                </div>
                <div className={classes.topRight}>
                    <div className={classes.topbarIconContainer}>
                        <NotificationsNone />
                        <span className={classes.topIconBadge}>2</span>
                    </div>
                    <div className={classes.topbarIconContainer}>
                        <Language />
                        <span className={classes.topIconBadge}>2</span>
                    </div>
                    <div className={classes.topbarIconContainer}>
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={classes.topAvatar} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;