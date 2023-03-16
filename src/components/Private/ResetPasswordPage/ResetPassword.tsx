import React from 'react';
import classes from './ResetPassword.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import { Formik } from 'formik';
import {schemaResetPassword} from "../../../yup/schemaReset";
import {API_URL} from "../../../http/requests/requests";
import $api from "../../../http";
interface IProps{
    email:string
}
const ResetPassword:React.FC<IProps> = ({email}) => {
    const navigate = useNavigate()
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.top}><h4 className={classes.title}>Reset Password</h4></div>
                <Formik initialValues={{
                    password:'',
                    confirm:''
                }}
                        validateOnBlur
                        onSubmit={async (values)=>{
                            const isChange = await $api.post(`${API_URL}api/reset-password`,{email, password:values.password})
                            if(isChange) navigate('/')

                        }}
                        validationSchema={schemaResetPassword}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                <div className={classes.form}>

                    <div className={classes.wrapperInput}>
                    <label htmlFor="email" className={classes.label}> E-mail Address</label> <input name={'email'} value={email} type="email" disabled={true} className={classes.input}/>
                    </div>
                    <div className={classes.wrapperInput}>
                        <label htmlFor="password" className={classes.label}> New Password</label> <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.password} name={'password'} className={classes.input}  placeholder={'New password'}/>
                        {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}
                    </div>

                     <div className={classes.wrapperInput}>
                        <label htmlFor="confirm" className={classes.label}> Confirm Password</label> <input type="text" name={'confirm'} onChange={handleChange} onBlur={handleBlur} value={values.confirm} className={classes.input}  placeholder={'Confirm new password'} id={'confirm'}/>
                         {touched.confirm && errors.confirm && <p className={classes.error}>{errors.confirm}</p>}
                    </div>

                        <button className={classes.button} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'}>Reset password</button>

                        </div>
                    )}

                </Formik>
            </div>
        </div>
    );
};

export default ResetPassword;