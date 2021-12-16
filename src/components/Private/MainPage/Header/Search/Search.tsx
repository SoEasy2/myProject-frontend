import React from 'react';
import classes from './Search.module.scss'
import locationImg from './assets/location.png'
import searchImg from './assets/search.png'
const Search:React.FC = () => {
    return (
            <>
                <div className={classes.wrapper}>
                    <form className={classes.form}>
                        <input type="text" className={classes.search}/>
                        <button className={classes.location}><img className={classes.locationImg} src={locationImg} alt=""/> All Belarus</button>
                        <img src={searchImg} alt="" className={classes.searchImg}/>
                    </form>
                </div>
            </>
    );
};

export default Search;