import React, {useState} from 'react';
import {productRows} from "./arr/product";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material";
import classes from './ProductList.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../../hooks/redux";
import {confirmProduct} from "../../../../../redux/reducers/ActionCreators";

const ProductList = () => {
    const dispatch = useAppDispatch()
    const {products} = useAppSelector(state=> state.adminReducer)
    const handleDelete = (id:number) => {
        console.log(true)
    };
    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 150,
            renderCell: (params:any) => {
                return (
                    <div className={classes.productListItem}>
                        <img className={classes.productListImg} src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "description", headerName: "Description", width: 200 },
        {
            field: "confirm",
            headerName: "Status",
            width: 100,
        },
        {
            field:"shortDescription",
            headerName:'Short description',
            width: 150
        },
        {
            field:'condition',
            headerName:'Condition'
        },
        {
            field: "price",
            headerName: "Price",
            width: 100,
        },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params:any) => {
                return (
                    <>
                            <button className={classes.productListEdit} onClick={()=>dispatch(confirmProduct(params.row._id))}>Confirm</button>
                        <DeleteOutline
                            className={classes.productListDelete}
                            onClick={() => console.log(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={classes.productList}>
            {products ?  <DataGrid
                rows={products}
                disableSelectionOnClick
                getRowId={(row)=>products  ? row._id : null}
                columns={columns}
                pageSize={8}
                checkboxSelection
            /> : null}
        </div>
    );
}


export default ProductList;