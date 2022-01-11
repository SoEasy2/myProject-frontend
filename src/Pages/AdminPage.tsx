import React, {useEffect, useState} from 'react';
import Admin from "../components/Private/AdminPage/Admin";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getProduct} from "../redux/reducers/ActionCreators";
import Loading from '../components/Global/Loading/Loading';

const AdminPage:React.FC = ({children}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [isLoading, setLoading] = useState<boolean>(false)
    const {user} = useAppSelector(state => state.userReducer)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
        dispatch(getProduct())
    },[])
    return (
        <>
            {isLoading ? <Loading/> : user && user.roles.includes('ADMIN') ? <div>
                <Admin children={children}/>
            </div> : navigate('/404')}
        </>
    );
};

export default AdminPage;