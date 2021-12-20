import React from 'react';
import classes from './ModalAuth.module.scss'
import {Formik} from 'formik'


const ModalAuth = () => {
    return (
        <>
            <div className={classes.content}>
            <div className={classes.tabs}>
                <div className={classes.tab}>Sign In</div>
                <div className={classes.tab}>Sign Up</div>
            </div>
                <div className={classes.container}>
            <Formik initialValues={{
                email:'',
                password:''
            }}
                    validateOnBlur
                    onSubmit={(values)=>{
                        console.log(values)
                    }}
                    // validationSchema={}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                    <div className={classes.form}>
                        <label htmlFor="email" className={classes.label}>
                            Email
                            <input className={classes.input} type="text" onChange={handleChange} onBlur={handleBlur} value={values.email} name={'email'}  id={'signInEmail'}/>
                        </label>
                        <label htmlFor="password" className={classes.label}>
                            Password
                            <input className={classes.input} type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} name={'password'}  id={'signInPassword'}/>
                        </label>
                        <button className={classes.create}>Login</button>
                    </div>
                )}

            </Formik>
                </div>
        </div>
        <div className={classes.modal}>
        </div>
        </>
    );
};

export default ModalAuth;