import React, {useEffect, useState} from 'react';
import ResetPassword from "../components/Private/ResetPasswordPage/ResetPassword";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../http/requests/requests";
import Loading from "../components/Global/Loading/Loading";
import NotFoundPage from "./NotFoundPage";

interface IState{
    loading:boolean,
    response:string | null;
}

const ResetPasswordPage = () => {
    const params = useParams()
    const [data,setData] = useState<IState>({loading:false, response:null})

    useEffect(()=>{

        (async () =>{
            setData({loading:true, response:null})
            const response = await axios.post(`${API_URL}api/checked-token`, {token:params.link})
            setData({loading:false, response:response.data})
        })()
        console.log(data)
    },[])
    return (
        <>

            {data.loading ? <Loading/>  : data.response ? <ResetPassword email={data.response}/> : <NotFoundPage/>}
        </>
    );
};

export default ResetPasswordPage;