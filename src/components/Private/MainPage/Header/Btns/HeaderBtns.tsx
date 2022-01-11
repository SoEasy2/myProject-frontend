import React from 'react';
import classes from "./HeaderBtns.module.scss";
import plus from "./assets/plus.png";
import {useAppSelector} from "../../../../../hooks/redux";
import {useNavigate} from "react-router-dom";

interface IProps{
    setAuthShow(obj:boolean):void
}
const HeaderBtns:React.FC<IProps> = ({setAuthShow}) => {
    const navigate = useNavigate()
    const {user} = useAppSelector(state=>state.userReducer)
    return (
        <div>
            <button className={classes.ad} onClick={()=> user ? navigate('/create-ad') : setAuthShow(true)}><img src={plus} alt="plus" className={classes.plus}/>Place an ad</button>
            <button className={classes.cart}>My cart <span className={classes.span}>5</span></button>
            {user ? null :<button className={classes.login} onClick={() => setAuthShow(true)}>Login</button>}
        </div>
    );
};

export default HeaderBtns;