import React from 'react';
import {CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, LineChart} from "recharts";
import classes from './Chart.module.scss'
interface IProps{
    title:any,
    data:any,
    dataKey:any,
    grid?:any
}
const Chart:React.FC<IProps> = ({title, data, dataKey, grid}) => {
    return (
        <div className={classes.chart}>
            <h3 className={classes.chartTitle}>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;