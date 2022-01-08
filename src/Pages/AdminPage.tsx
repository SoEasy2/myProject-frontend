import React, {useEffect} from 'react';
import Admin from "../components/Private/AdminPage/Admin";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux";
import {getProduct} from "../redux/reducers/ActionCreators";

const AdminPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    },[])
    return (
        <div>
            <Admin/>
        </div>
    );
};

export default AdminPage;