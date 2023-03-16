import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import $api from "../../../http";
import Product from "./Product/Product";
import {IProduct} from "./model/product";


const ModalProduct = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct | null>(null)
    const nav = () =>{
        navigate('/404')
    }
    useEffect(()=>{
        (async () =>{
            setLoading(true)
            const productId = params.product;
            const product = await $api.get<IProduct | null>(`api/get-product/${productId}`)//hz poka get or post
            setProduct(product.data)
            setLoading(false)
        })()

    },[])

    return (
        <>
            {isLoading ? <h1>LOAD</h1> : product ? <Product product={product}/> : nav()}
        </>
    );
};

export default ModalProduct;