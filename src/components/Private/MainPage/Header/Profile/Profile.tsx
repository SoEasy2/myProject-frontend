import React, {useState} from 'react';
import classes from './Profile.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import {authLogout} from "../../../../../redux/reducers/ActionCreators";
import { Link } from 'react-router-dom';
import {API_URL} from "../../../../../http/requests/requests";
const Profile = () => {
    const [isLoading, setLoading] = useState({isFistLoading:true, isActive:false});
    const {user} = useAppSelector(state=>state.userReducer)
    const img = isLoading.isActive ? require('./assets/arrowTop.png') : require('./assets/arrowBot.png')
    const dispatch = useAppDispatch()
    return (
        <div className={classes.wrapperProfile}  onClick={()=>setLoading({isFistLoading: false, isActive: !isLoading.isActive})}>
            <img src={user ? `${API_URL}${user.avatar}` : ''} alt="img-profile" className={classes.imgProfile} />

            <button className={classes.btn}>Profile <img src={img.default} alt="img" className={classes.img}/></button>
            {!isLoading.isFistLoading ? <div
                className={isLoading.isActive ? `${classes.modal} ${classes.modalOpen}` : `${classes.modal} ${classes.modalClose}`}>
                <ul>
                    <li>
                        <Link to={'/profile/account'}><button className={classes.btnModal}>Profile</button></Link>
                    </li>
                    <hr className={classes.hr}/>
                    <li className={classes.li}>
                        <button className={`${classes.btnModal}`} onClick={() => dispatch(authLogout())}>Logout</button>
                    </li>
                </ul>
            </div> : null}
        </div>

    );
};

export default Profile;