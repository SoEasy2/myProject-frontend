import React, {useEffect} from 'react';
import {useAppSelector} from "../../../../../../hooks/redux";
import classes from "./Actions.module.scss";
import {DataGrid} from "@mui/x-data-grid";


const Actions = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const columns = [
        {
            field: "text",
            headerName: "Action",
            width: 500
        },
        {field: "adminName", headerName: "Admin", width: 211},
        {field:"date", headerName: "Date"}

    ];
    return (
        <div className={classes.productList}>
            {user && user.actions && user.actions.length > 0 ?   <DataGrid
                rows={user.actions}
                disableSelectionOnClick
                getRowId={(row) => row.date}
                columns={columns}
                pageSize={5}
                checkboxSelection

            /> : <h4>'Logov netu</h4>}
        </div>
    );
};

export default Actions;