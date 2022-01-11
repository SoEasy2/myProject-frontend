import React, {useState} from 'react';
import classes from './Password.module.scss'
import Input from "../Input/Input";
import {useAppSelector} from "../../../../../../hooks/redux";
import { Formik } from 'formik';
import {schemaChangePassword} from "../../../../../../yup/schemaChangePassword";
import Avatar from "../Avatar/Avatar";
import $api from "../../../../../../http";
const Password:React.FC = ({children}) => {
    const {user} = useAppSelector(state => state.userReducer)
    const [isCurrentError, setCurrentError] = useState<boolean>(false)

    return (
        <>
            <h4 className={classes.passwordTitle}>Password</h4>
            {children}
            <Formik initialValues={{
                password:'',
                confirm:'',
                currentPassword:''
            }}
                    validateOnBlur
                    onSubmit={async (values)=>{
                        const {data} = await $api.post('api/change-password', {email:user!.email, currentPassword:values.currentPassword, newPassword:values.password})
                        if (!data) setCurrentError(true)
                        else setCurrentError(false)
                        values.confirm = ''
                        values.password = ''
                        values.currentPassword = ''
                    }}
                    validationSchema={schemaChangePassword}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                    <div>
                    <div className={classes.wrapperInput}>
                <Input name={'recEmail'} text={'Email addres'} value={user!.email} desk={'For logging in'} disabled={true}/>
                        <div>
                            <div className={classes.wrapper}>
                                <label className={classes.name}>Current password</label>
                                <label className={classes.desk}>Date of last password change: 15.04.2003</label>
                            </div>
                            <input onChange={handleChange} onBlur={handleBlur} name={'currentPassword'}   value={values.currentPassword}  type="text"  className={classes.input} />
                            {isCurrentError ?  <p className={classes.error}>Incorrect current password</p> : null}
                        </div>

            </div>
            <hr className={classes.hr}/>

            <div className={classes.wrapperInput}>

                <div>
                    <div className={classes.wrapper}>
                        <label className={classes.name}>New Password</label>
                        <label className={classes.desk}></label>
                    </div>
                    <input onChange={handleChange} onBlur={handleBlur}  type="text" name={'password'} value={values.password}  className={classes.input} />
                    {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}
                </div>
                <div>
                    <div className={classes.wrapper}>
                        <label className={classes.name}>Confirm new password</label>
                        <label className={classes.desk}></label>
                    </div>
                    <input onChange={handleChange} onBlur={handleBlur}  type="text" name={'confirm'} value={values.confirm}  className={classes.input} />
                    {touched.confirm && errors.confirm && <p className={classes.error}>{errors.confirm}</p>}
                </div>
            </div>

            <hr className={classes.hr}/>
            <div className={classes.wrapperBtn}>
                <button className={classes.save} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'}>Save change</button>
            </div>
                    </div>
                    )}
            </Formik>
        </>
    );
};

export default Password;