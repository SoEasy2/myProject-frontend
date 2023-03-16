import React from 'react';
import classes from './Profile.module.scss'
const Profile = () => {
    return (
        <div className={classes.content}>
            {/*<img src="" alt="photo"/>*/}
            <div className={classes.img}></div>
            <div className={classes.info}>
                <p>NAME</p>
                <p>Administrator</p>
            </div>
        </div>
    );
};

export default Profile;