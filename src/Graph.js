import React, { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import useStats from './useStats';

function Graph() {

    const url = `https://covid19.mathdro.id/api/countries/italy`;
    const stats = useStats(url);
    if (!stats) return <p>Loading...</p>;

    /*let apiValue = await fetch(`https://covid19.mathdro.id/api/countries/italy`);
    const header = apiValue;
    console.log(header);

    const chartData = [];

    for (let i = 0; i < header.length; i++) {
        const newRow = [];
        newRow.name = [header[i]];
        newRow.data = parseInt(header[i]);
        chartData.push(newRow);
    }
    console.log(chartData);
    setData(chartData);
    setIsLoading(false);
    return null;


    const fetch = async () => {
        const requestOption = {
            method: "GET",
            redirect: "follow"
        };

        const apiUrl = `https://covid19.mathdro.id/api/countries/italy`;

        try {
            const response = await fetch(apiUrl, requestOption);
            return response.ok ? response.text() : null;
        } catch (err) {
            console.log(err);
            return null;
        };
    };
    runCall();*/

    return (
        <div className="chart-wrapper">
            <LineChart
                width={800}
                height={500}
                data={stats}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stats" stroke="blue" activeDot={{ r: 8 }} />
            </LineChart>            
        </div >
    );
}

export default Graph;