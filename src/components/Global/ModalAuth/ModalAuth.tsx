import React, {useEffect, useState} from 'react';
import classes from './ModalAuth.module.scss'
import {Formik} from 'formik'
import {schemaAuthLogin, schemaAuthRegister} from "../../../yup/schemaAuth";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {authLogin, authRegister} from "../../../redux/reducers/ActionCreators";
import ModalForgotten from "../ModalForgotten/ModalForgotten";



interface IProps{
    isShow:Boolean,
    setShow(obj:boolean):void
}
const ModalAuth:React.FC<IProps> = ({isShow, setShow}) => {
    const [isTabSignIn, setTabSignIn] = useState<Boolean>(true)
    const {user,error} = useAppSelector(state=>state.userReducer)
    const [isForgotten, setForgotten] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const handleError = (err:string | null) =>{
        if (!err) {
            setShow(false)
        }
    }


    useEffect(()=>{
        handleError(error)
    }, [error])

    return (<>
            <div className={isShow ?`${classes.show} ${classes.showActive}` : `${classes.show}`} id={'center'} onClick={()=>setShow(false)}>
                <ModalForgotten isForgotten={isForgotten} setForgotten={setForgotten}/>
                <div className={classes.center}>
            <div className={classes.content} onClick={e=>e.stopPropagation()}>
            <div className={classes.tabs}>
                <div className={isTabSignIn ? `${classes.tab} ${classes.active}` : `${classes.tab}`} onClick={()=>setTabSignIn(!isTabSignIn)}>Sign In</div>
                <div className={isTabSignIn ? `${classes.tab}` : `${classes.tab} ${classes.active}`} onClick={()=>setTabSignIn(!isTabSignIn)}>Sign Up</div>
            </div>
                <div className={classes.container}>
                    <div className={isTabSignIn ? `${classes.tabSignIn} ${classes.activeTab}` : `${classes.tabSignIn}`}>
                        <Formik initialValues={{
                            signInEmail:'',
                            signInPassword:''
                        }}
                                validateOnBlur
                                onSubmit={async (values)=>{
                                        const obj = {email:values.signInEmail,
                                            password:values.signInPassword}
                                        dispatch(authLogin(obj))
                                    }}
                                validationSchema={schemaAuthLogin}
                        >
                            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                                <div className={classes.form}>
                                    <label htmlFor="signInEmail" className={classes.label}>
                                        Email
                                        <input className={classes.input} type="text" onChange={handleChange} onBlur={handleBlur} value={values.signInEmail} name={'signInEmail'}  id={'signInEmail'}/>
                                        {touched.signInEmail && errors.signInEmail && <p className={classes.error}>{errors.signInEmail}</p>}
                                    </label>
                                    <label htmlFor="signInPassword" className={classes.label}>
                                        Password
                                        <input className={classes.input} type="password" onChange={handleChange} onBlur={handleBlur} value={values.signInPassword} name={'signInPassword'}  id={'signInPassword'}/>
                                        {touched.signInPassword && errors.signInPassword && <p className={classes.error}>{errors.signInPassword}</p>}
                                        <p className={classes.forg} onClick={()=>setForgotten(true)}>Forgot password?</p>
                                    </label>

                                    <button className={classes.create} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'}>Login</button>
                                </div>
                            )}

                        </Formik>
                    </div>
                    <div className={isTabSignIn ? `${classes.tabSignUp}` : `${classes.tabSignUp} ${classes.activeTab}` }>
                        <Formik initialValues={{
                            signUpName:'',
                            signUpEmail:'',
                            signUpPassword:'',
                            signUpConfirmPassword:''
                        }}
                                validateOnBlur
                                onSubmit={(values)=>{
                                    const obj = {email:values.signUpEmail,
                                                password:values.signUpPassword,
                                                name:values.signUpName}
                                    dispatch(authRegister(obj))
                                }}
                                validationSchema={schemaAuthRegister}
                        >
                            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                                <div className={classes.form}>
                                    <label htmlFor="signUpName" className={classes.label}>
                                        Name
                                        <input className={classes.input} type="text" name={'signUpName'}  id={'signUpName'} onChange={handleChange} onBlur={handleBlur} value={values.signUpName}/>
                                        {touched.signUpName && errors.signUpName && <p className={classes.error}>{errors.signUpName}</p>}
                                    </label>
                                    <label htmlFor="signUpEmail" className={classes.label}>
                                        E-mail
                                        <input className={classes.input} type="email" name={'signUpEmail'}  id={'signUpEmail'} onChange={handleChange} onBlur={handleBlur} value={values.signUpEmail}/>
                                        {touched.signUpEmail && errors.signUpEmail && <p className={classes.error}>{errors.signUpEmail}</p>}
                                    </label>
                                    <label htmlFor="signUpPassword" className={classes.label}>
                                        Password
                                        <input className={classes.input} type="text" name={'signUpPassword'}  id={'signUpPassword'} onChange={handleChange} onBlur={handleBlur} value={values.signUpPassword}/>
                                        {touched.signUpPassword && errors.signUpPassword && <p className={classes.error}>{errors.signUpPassword}</p>}
                                    </label>
                                    <label htmlFor="signUpConfirmPassword" className={classes.label}>
                                        Confirm password
                                        <input className={classes.input} type="text" name={'signUpConfirmPassword'}  id={'signUpConfirmPassword'} onChange={handleChange} onBlur={handleBlur} value={values.signUpConfirmPassword}/>
                                        {touched.signUpConfirmPassword && errors.signUpConfirmPassword && <p className={classes.error}>{errors.signUpConfirmPassword}</p>}
                                    </label>
                                    <button className={classes.create} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'}>Create account</button>
                                </div>
                                )}
                        </Formik>
                    </div>

                </div>
        </div>
            </div>
            </div>
        </>
    );
};

export default ModalAuth;