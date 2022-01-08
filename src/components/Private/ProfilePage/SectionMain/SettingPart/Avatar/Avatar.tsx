import React, {useState} from 'react';
import classes from './Avatar.module.scss'
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks/redux";
import {uploadImg} from "../../../../../../redux/reducers/ActionCreators";
import {API_URL} from "../../../../../../http/requests/requests";


interface IProps{
    setImg(obj:any):void;
    img:any;
}
const Avatar:React.FC = () => {
    const [img, setImg] = useState()
    const changeHandler = (event:any)=>{
        setImg(event.target.files[0])
    }
    const {user} = useAppSelector(state=>state.userReducer)
    const dispatch = useAppDispatch()
    const handleUpdateImg = async (e:any) =>{
        e.preventDefault()
        if (img){
            const formData = new FormData();
            formData.append('avatar',img)
            dispatch(uploadImg(formData))
        }
    }
    return (
        <>
            <form method="POST" className={classes.avatarWrapper} onSubmit={(e)=>handleUpdateImg(e)} encType="multipart/form-data">
                <img className={classes.profileImg} src={user ? `${API_URL}${user.avatar}` :''} alt="profile-img"/>
                <label htmlFor="file-upload" className={classes.btnImg}>
                    Choose file
                </label>
                <input type="file" id={'file-upload'} name={'avatar'} className={classes.file} onChange={e=>changeHandler(e)}/>
                <button className={classes.btnImg} onClick={e=>e.preventDefault()}>Remove</button>
                <button className={classes.btnImg} type={'submit'}>Load</button>
            </form>
            <hr className={classes.hr}/>
        </>
    );
};

export default Avatar;