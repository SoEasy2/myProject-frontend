import React from 'react';
import classes from './User.module.scss'
import {API_URL} from "../../../../../../../http/requests/requests";
interface IProps{
    avatar:string;
    email:string;
    name:string
}
const User:React.FC<IProps> = ({avatar, name, email}) => {
    return (
        <li className={classes.widgetUserListItem}>
            <img
                src={`${API_URL}${avatar}`}
                alt=""
                className={classes.widgetUserImg}
            />
            <div className={classes.widgetUser}>
                <span className={classes.widgetUserName}>{name}</span>
                <span className={classes.widgetUserEmail}>{email}</span>
            </div>
        </li>
    );
};

export default User;