import {IProduct} from "./IProduct";

interface IItems{
    count:number;
    product:IProduct[]
}

interface ILogs{
    name:string;
    date:Date;
    _id:string;
}

interface IAction{
    adminName:string;
    userId:string;
    text:string;
    date:Date;
}

export interface IUser{
    _id:string;
    email:string;
    name:string;
    password:string;
    phone:string | null;
    avatar:string;
    cart:{
        items:IItems | null
    };
    logs:Array<ILogs> | null;
    actions:Array<IAction> | null,
    roles:Array<string>
}
