import React from 'react';
import data from './useStats';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart extends React.Component {

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="value" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="blue" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="recovered" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="deaths" stroke="green" />
      </LineChart>
    );
  }
}

export default Chart;