import React, {useEffect} from 'react';
import classes from './Logs.module.scss'
import {DataGrid} from "@mui/x-data-grid";
import {useAppSelector} from "../../../../../../hooks/redux";

const Logs = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const columns = [

        {
            field: "name",
            headerName: "Log",
            width: 550,
        },
        {field: "date", headerName: "Date", width: 211},

    ];
    useEffect(()=>{
        const arr:any = []
        if(arr) console.log(true)
    },[])
    return (
        <div className={classes.productList}>
            {user && user.logs && user.logs.length > 0 ?   <DataGrid
                rows={user.logs}
                disableSelectionOnClick
                getRowId={(row) => row.date}
                columns={columns}
                pageSize={5}
                checkboxSelection

                /> : <h4>'Logov netu</h4>}
        </div>
    );
}


export default Logs;