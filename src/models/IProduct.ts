
interface IUser{
    name:string;
    phone:string | null;
    avatar:string;
    email:string;
}

export interface IProduct{
    _id:string;
    name:string;
    shortDescription:string;
    img:string ;
    price:number;
    description:string;
    condition:string;
    typeProduct:string;
    date:Date;
    user:IUser

}