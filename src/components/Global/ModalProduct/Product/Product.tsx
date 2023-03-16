import React, {useState} from 'react';
import classes from './Product.module.scss'
import {IProduct} from "../model/product";
import {API_URL} from "../../../../http/requests/requests";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/redux";
import StripeCheckout from 'react-stripe-checkout'
import $api from "../../../../http";

interface IProps{
    product:IProduct
}

const Product:React.FC<IProps> = ({product}) => {
    const {user} = useAppSelector(state=>state.userReducer)
    const [isPayment, setPayment] = useState<boolean>(false)
    const navigate = useNavigate()
    const getMonth = (date:Date) =>{
        const month = date.toLocaleString('default', { month: 'long' });
        return month
    }

    const makePayment = async (token:any) =>{
        const body = {
            idProduct:product._id,
            idUser:user!._id,
            token
        }
        const response = await $api.post('api/payment', body)
        console.log(response)
    }

    return (
        <div className={classes.wrapper} onClick={()=>navigate('/store')}>
            <div className={classes.content} onClick={e=>e.stopPropagation()}>
                <div className="image">
                    <img src={`${API_URL}${product.img}`} alt="" className={classes.img}/>
                </div>
                <div className={classes.info}>
                    <p className={classes.text}>Description: {product.description}</p>
                    <p className={classes.text}>Short description: {product.shortDescription}</p>
                    <p className={classes.text}>Condition: {product.condition}</p>
                    <p className={classes.text}>Type: {product.type}</p>
                    <p className={classes.text}>Date: {new Date(product.date).getDay()} {getMonth(new Date(product.date))} {new Date(product.date).getFullYear()}</p>
                    <div className={classes.user}>
                        <img src={`${API_URL}${product.user.avatar}`} alt="img" className={classes.imgUser}/>
                        <div className={classes.infoUser}>
                            <span className={classes.span}>{product.user.name}</span>
                            <span className={classes.span}>{product.user.phone}</span>
                        </div>
                    </div>
                    {user ?  <StripeCheckout stripeKey='pk_test_51JzgFZCQXr7lfUBB3dayNNHZdW5tDLBc2hCYMV0CY3iiEJWUq1Ey5DbQ2Vyj4k7jgKWA5oQdYe0fYOplzHEzdv0200d9BCWfkD' name={product.name} amount={product.price*100} token={makePayment}>
                        <button className={classes.button}>Buy product is just ${product.price}</button>
                    </StripeCheckout> : null}

                </div>
            </div>
        </div>

    );
};

export default Product;