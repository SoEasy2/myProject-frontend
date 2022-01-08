import React, {useState} from 'react';
import classes from './SectionMain.module.scss'
import {Formik} from 'formik'
import Select from 'react-select'
import {schemaCreateAd} from "../../../../yup/schemaAd";
import {config, types} from "./config/config";
import defaultImg from './assets/noImage.png'
import {useAppDispatch} from "../../../../hooks/redux";
import {createProduct} from "../../../../redux/reducers/ActionCreators";
const SectionMain = () => {
    const dispatch = useAppDispatch();
    const [img,setImg] = useState<any>()
    const [condition, setCondition] = useState<string>('New')
    const[imgBack, setImgBack] = useState<any>()
    const [type,setType] = useState<string>('Clothing & Shoes')
        const imageHandler = (e:any) =>{
            const reader = new FileReader()
            reader.onload = () =>{
                if (reader.readyState === 2){
                    setImg(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
            setImgBack(e.target.files[0])
        }
    const handlerSubmit = async (values:any) =>{
        values.avatar = imgBack;
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('shortDescription',values.shortDesk)
        formData.append('description',values.desk)
        formData.append('price', values.price)
        formData.append('avatar', values.avatar)
        formData.append('condition', condition)
        formData.append('type', type)
        dispatch(createProduct(formData))
    }
     return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h4 className={classes.title}>Create Ad</h4>
                    <div className={classes.wrapper}>
                        <div className="left">
                            <img className={classes.img} src={img ? img : defaultImg} alt={'img'}/>
                            <label htmlFor="file-upload" className={classes.btnImg}>
                                Upload
                            </label>
                            <input type="file" id={'file-upload'} className={classes.file} onChange={e=>imageHandler(e)}/>
                        </div>
                        <div className={classes.right}>
                            <Formik initialValues={{
                                name:'',
                                desk:'',
                                shortDesk:'',
                                price:''
                            }}
                                    validateOnBlur
                                    onSubmit={async(values)=>{
                                        console.log(true)
                                        await handlerSubmit(values)
                                    }}
                                    validationSchema={schemaCreateAd}
                            >
                                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                                    <div className={classes.form}>
                                        <label htmlFor={'name'} className={classes.label}>
                                            Name
                                            <input type="text" name={'name'} id={'name'} onChange={handleChange} onBlur={handleBlur} value={values.name} className={classes.input}/>
                                            {touched.name && errors.name && <p className={classes.error}>{errors.name}</p>}
                                        </label>
                                        <label htmlFor="" className={classes.label}>
                                            Type product
                                            <Select name={'condition'} options={types} defaultValue={types[0]} onChange={(e)=>e ? setType(e.label) : setCondition('Clothing & Shoes')}/>
                                        </label>
                                        <label htmlFor="desk" className={classes.label}>
                                            Description
                                            <textarea className={classes.area} onChange={handleChange} onBlur={handleBlur} value={values.desk} id={'desk'} name={'desk'}>
                                             </textarea>
                                            {touched.desk && errors.desk && <p className={classes.error}>{errors.desk}</p>}
                                        </label>
                                        <label htmlFor="shortDesk" className={classes.label} >
                                            Short description
                                            <input type="text"  name={'shortDesk'} id={'shortDesk'} onChange={handleChange} onBlur={handleBlur} value={values.shortDesk} className={classes.input}/>
                                            {touched.shortDesk && errors.shortDesk && <p className={classes.error}>{errors.shortDesk}</p>}
                                        </label >
                                        <label htmlFor="price" className={classes.label}>
                                            price
                                            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name={'price'} id={'price'} className={classes.input}/>
                                            {touched.price && errors.price && <p className={classes.error}>{errors.price}</p>}
                                        </label>
                                        <div className="">
                                            <label htmlFor="" className={classes.label}>
                                                Condition
                                                <Select name={'condition'} options={config} defaultValue={config[0]} onChange={(e)=>e ? setCondition(e.label) : setCondition('New')}/>
                                            </label>
                                        </div>
                                        <div className={classes.btnWrapper}>
                                            <button className={classes.save} type={'submit'} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}>Save</button>
                                        </div>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMain;