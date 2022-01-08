import React, {useState} from 'react';
import classes from './ModalForgotten.module.scss'
import {schemaAuthLogin} from "../../../yup/schemaAuth";
import { Formik } from 'formik';
import {schemaForgotten} from "../../../yup/schemaForgotten";
import $api from "../../../http";
import {API_URL} from "../../../http/requests/requests";

interface IProps{
    isForgotten:boolean;
    setForgotten(obj:boolean):void
}
const ModalForgotten:React.FC<IProps> = ({isForgotten, setForgotten}) => {
    const [isLoad, setLoad] = useState<boolean>(false)
    const handleClose = (e:any) =>{
        e.stopPropagation()
        setForgotten(false)
    }

    return (//VALIDATION FORMIK + YUP
        <div className={isForgotten ? `${classes.wrapper} ${classes.active}` : `${classes.wrapper}`} onClick={e=>handleClose(e)}>
            <div className={classes.content} onClick={(e)=>e.stopPropagation()}>
                <div className={isLoad ? `${classes.containerLoader} ${classes.loaderActive}` : `${classes.containerLoader}`}><div className={classes.loader}></div></div>
                <Formik initialValues={{
                    email:''
                }}
                        validateOnBlur
                        onSubmit={async (values)=>{
                            setLoad(true)
                            await $api.post(`${API_URL}api/generateToken-reset`,{email:values.email})
                            setLoad(false)
                            values.email = ''
                        }}
                        validationSchema={schemaForgotten}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                <div>
                    <label htmlFor="email" className={classes.label}>Email</label><input type="text" className={classes.input} id={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={'Email'}/>
                    {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
                    <div className={classes.wrapperBtn}>

                        <button className={classes.button} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'}>Reset Password</button>
                    </div>
                </div>
                        )}
                </Formik>
            </div>
        </div>
    );
};

export default ModalForgotten;