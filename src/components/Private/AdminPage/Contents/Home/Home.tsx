import React from 'react';
import classes from './Home.module.scss'
import AnalyticsPerformance from "./AnalyticsPerformance/AnalyticsPerfomance";
import {userData} from "./Chart/data/data";
import WidgetUsers from "./WidgetUsers/WidgetUsers";
import WidgetTransactions from "./WidgetTransactions/WidgetTransactions";
import Chart from "./Chart/Chart";




const Home = () => {
    return (
        <div className={classes.analytics}>
            <AnalyticsPerformance/>
            <Chart title={'User Home'} data={userData} dataKey={'Active User'} />
            <div className={classes.widgets}>
                <WidgetUsers/>
                <WidgetTransactions/>
            </div>
        </div>
    );
};

export default Home;