import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 300000,
                "sell": 209000,
                "revenue": 400401
            },
            {
                "month": "Apr",
                "investment": 500000,
                "sell": 450000,
                "revenue": 100500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 420000,
                "revenue": 607010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 300000,
                "revenue": 400405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 700000,
                "revenue": 200900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 200000,
                "revenue": 310000
            }
        ]
    return (
        <div className='container'>
            <h1>This is dashboard part compo</h1>
            <BarChart width={1000} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <Bar dataKey="sell" fill="red" />
            </BarChart>
            <h3>Investment vs Sell vs Revenue</h3>
            <ComposedChart width={1000} height={500} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="revenue" stroke="red" />
            </ComposedChart>
            <h3>Investment vs Sell vs Revenue</h3>
            <LineChart width={1000} height={500} data={data}>
                <Line dataKey={'investment'} stroke="green"></Line>
                <Line dataKey={'sell'} stroke="red"></Line>
                <Line dataKey={'revenue'} stroke="blue"></Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
            <h3>Investment vs Sell vs Revenue</h3>
        </div>
    );
};

export default Dashboard;