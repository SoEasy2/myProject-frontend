import React from 'react';
import classes from './Search.module.scss'
import searchImg from './assets/search.png'
import del from './assets/del.png'
const Search:React.FC = () => {
    return (
            <>
                <div className={classes.wrapper}>
                    <form className={classes.form}>
                        <input type="text" className={classes.search}/>
                        <img src={searchImg} alt="" className={classes.searchImg}/>
                        <img src={del} alt="" className={classes.delImg}/>
                    </form>
                </div>
            </>
    );
};

export default Search;