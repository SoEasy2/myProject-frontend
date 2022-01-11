interface IUser{
    avatar:string;
    name:string;
    phone:string
}
export interface IProduct{
    _id:string;
    name:string;
    img:string;
    price:number
    description:string
    type:string
    shortDescription:string
    condition:string
    date:Date
    user:IUser
}