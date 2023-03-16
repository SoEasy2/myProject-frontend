import React, {useState} from 'react';
import Select from 'react-select'
import classes from './CardSettings.module.scss'


interface IShowBtn{
    all:boolean;
    auction:boolean;
    now:boolean;
}
interface IPresented{
    block:boolean,
    line:boolean
}

const CardSettings = () => {
    const price = [
            { value: 'plus', label: 'Plus' },
            { value: 'minus', label: 'Minus' }]
    const [isShowBtn, setShowBtn] = useState<IShowBtn>({all:true, auction:false, now:false})
    const resetShow:IShowBtn = {all:false, auction:false, now:false}
    const [isPresented, setPresented] = useState<IPresented>({line:false, block:true})
    const block = require(isPresented.block ? './assets/blockTrue.svg' : './assets/blockFalse.svg')
    const line = require(isPresented.line ? './assets/lineTrue.svg' : './assets/lineFalse.svg')
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <Select className={classes.selectPrice} options={price} defaultValue={{value:'default', label:'Sort by price'}}/>
                <select name="" id="">
                    <option value="">asd</option>
                    <option value="">asd</option>
                    <option value="">asd</option>
                </select>
            </div>
            <div className={classes.right}>
                <div className="show">
                    <button className={isShowBtn.all ? `${classes.showBtn} ${classes.activeShowBtn}` : `${classes.showBtn}`} onClick={()=>setShowBtn({...resetShow, all:true})}>Show all</button>
                    <button className={isShowBtn.auction ? `${classes.showBtn} ${classes.activeShowBtn}` : `${classes.showBtn}`} onClick={()=>setShowBtn({...resetShow, auction:true})}>Auction</button>
                    <button className={isShowBtn.now ? `${classes.showBtn} ${classes.activeShowBtn}` : `${classes.showBtn}`} onClick={()=>setShowBtn({...resetShow, now:true})}>Buy now</button>
                </div>
                <div className={classes.presentation}>
                    <button className={isPresented.line ? `${classes.presentationBtn} ${classes.activePresentationBtn}` : `${classes.presentationBtn}`} onClick={()=>setPresented({block:false, line:true})}><img src={line.default} alt="asd"/></button>
                    <button className={isPresented.block ? `${classes.presentationBtn} ${classes.activePresentationBtn}` : `${classes.presentationBtn}`} onClick={()=>setPresented({block:true, line:false})}><img src={block.default} alt="aasd"/></button>
                </div>
            </div>
        </div>
    );
};

export default CardSettings;