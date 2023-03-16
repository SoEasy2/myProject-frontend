import React, {useEffect, useState} from 'react';
import Header from "./Header/Header";
import SectionMain from "./SectionMain/SectionMain";
import {useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router-dom";
import Loading from "../../Global/Loading/Loading";


const Profile:React.FC = ({children}) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const {user}= useAppSelector(state=>state.userReducer)
    const navigate = useNavigate()
    useEffect(()=> {
       setLoading(true);
       setTimeout(()=>{
           if(user) setLoading(false)
           else setLoading(false)
       },1000)

    },[])
    return (
        <>
            {isLoading ? <Loading/> : user ? <section>
                <Header/>
                <SectionMain children={children}/>
            </section> : navigate('/404')}
        </>
    );
};

export default Profile;