interface IConfig{
    value:string;
    label:string
}
export const config:Array<IConfig> = [{
    value:'Used', label:'Used',
}, {
    value:'New', label:'New'
}]

export const types:Array<IConfig> = [{ label:'Clothing & Shoes',
    value: 'clothing'
},
    {
        label:'Entertainment', value:'video'
    },
    {
        label:'Music', value:'music'
    },
    {
        label:'Sport & Lifestyle', value:'sport'
    },
    {
        label:'Pets', value:'pets'
    },
    {
        label:'Kitchen Accessories', value:'food'
    },
    {
        label:'Travel Equipment', value:'travel'
    },
    {
        label:'Growing & Garden', value:'growing'
    },
    {
        label:'Electrical Tools', value:'electrical'
    },
    {
        label:'Mother Care', value:'mother'
    },
    {
        label:'Toys & Entertainment', value:'toys'
    },
    {
        label:'Vintage', value:'vintage'
    },

]