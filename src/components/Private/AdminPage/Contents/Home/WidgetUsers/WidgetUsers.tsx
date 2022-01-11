import React, {useEffect, useState} from 'react';
import classes from './WidgetUsers.module.scss'
import User from "./User/User";
import $api from "../../../../../../http";
const WidgetUsers = () => {
    const [users,setUsers] = useState<Array<any>>()
    useEffect(()=>{
        (async ()=>{
            const {data} = await $api.get('api/admin/getNewUsers')
            setUsers(data)
        })()
    },[])

    return (
        <div className={classes.widgetUsers}>
            <span className={classes.widgetUsersTitle}>New Join Members</span>
            <ul className={classes.widgetUsersList}>
                {users ? users.map(item => <User key={item._id} name={item.name} avatar={item.avatar} email={item.email}/>
                ) :null}
            </ul>
        </div>
    );
};

export default WidgetUsers;