import React, {useEffect, useState} from 'react';
import classes from './Account.module.scss'
import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks/redux";
import {updateUser} from "../../../../../../redux/reducers/ActionCreators";


interface IState{
    phone:string | null;
    name:string
}
const Account:React.FC = ({children}) => {
    const [value,setValue] = useState<IState>({
        name:'',
        phone:''
    })
    const {user} = useAppSelector(state=> state.userReducer)
    const dispatch = useAppDispatch()
    const [isLoading, setLoading] = useState<boolean>(false)
    const inputChangeHandler = (event:any) =>{
        setValue({...value, [event.target.name]:event.target.value})
    }
    const handleClick = () =>{
        dispatch(updateUser(value))
    }
    useEffect(()=>{
        (()=>{
           setValue({name:user!.name, phone:user!.phone})
        })()

    },[user])
    return (
                <div>
            <h4 className={classes.accountTitle}>Account</h4>
            <Avatar/>
            <div className={classes.wrapperInput}>
                <Input name={'name'} text={'Display name'} value={value.name}  inputChangeHandler={inputChangeHandler} desk={'Visible to other members'} disabled={false}/>
                <Input name={'date'} value={user!.date} text={'Registration date'} desk={'Account registration date'} disabled={true}/>
            </div>
            <hr className={classes.hr}/>
            <div className={classes.wrapperInput}>
                <Input name={'email'} text={'Email address'} value={user!.email} desk={'For logging in'} disabled={true}/>
                <Input name={'phone'} text={'Phone number'} value={value!.phone ? value.phone : ''} inputChangeHandler={inputChangeHandler} desk={'For communication with buyers'} disabled={false}/>
            </div>
            <hr className={classes.hr}/>
            <div className={classes.wrapperBtn}>
                <button className={classes.save} onClick={handleClick}>Save change</button>
            </div>
        </div>

    );
};

export default Account;