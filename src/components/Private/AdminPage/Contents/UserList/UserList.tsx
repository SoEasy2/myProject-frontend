import { DataGrid } from '@mui/x-data-grid';
import React, {useState} from 'react';
import classes from './UserList.module.scss'
import {DeleteOutline} from "@mui/icons-material";
import {userRows} from "./rows/rows";

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id:any) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params:any) => {
                return (
                    <div className={classes.userListUser}>
                        <img className={classes.userListImg} src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params:any) => {
                return (
                    <>
                            <button className={classes.userListEdit}>Edit</button>
                        <DeleteOutline
                            className={classes.userListDelete}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];


    return (
        <div className={classes.userList}>
            <DataGrid columns={columns} rows={data}
                      disableSelectionOnClick
                      pageSize={8}
                      checkboxSelection/>
        </div>
    );
};

export default UserList;