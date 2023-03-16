import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react';
import classes from './UserList.module.scss'
import {DeleteOutline} from "@mui/icons-material";
import {userRows} from "./rows/rows";
import $api from "../../../../../http";
import {API_URL} from "../../../../../http/requests/requests";

const UserList = () => {
    const [data, setData] = useState(userRows);
    const [users,setUsers] = useState(null)
    const handleDelete = (id:any) => {
        setData(data.filter((item) => item.id !== id));
    };
    useEffect(()=>{
        (async()=>{
            const {data} = await $api.get('api/admin/getUsers')
            setUsers(data)
        })()
    },[])
    const columns = [
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params:any) => {
                return (
                    <div className={classes.userListUser}>
                        <img className={classes.userListImg} src={`${API_URL}${params.row.avatar}`} alt="" />
                        {params.row.email}
                    </div>
                );
            },
        },
        { field: "name", headerName: "Name", width: 200 },
        {
            field: "countTransactions",
            headerName: "Transaction Count",
            width: 160,
        },
        {field:'phone', headerName: 'Phone'},
        {field:'date', headerName: "Registration date", width: 200}


    ];


    return (
        <div className={classes.userList}>
            {users ? <DataGrid columns={columns} rows={users}
                               disableSelectionOnClick
                               getRowId={(row)=>users  ? row.date : null}
                               pageSize={8}
                               checkboxSelection/> : null}
        </div>
    );
};

export default UserList;