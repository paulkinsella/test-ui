import PropTypes from "prop-types";
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const ProcessPieChart = ({ data, type }) => {
  console.log("Chart Type", type);
  return (
    <BarChart
      width={500}
      height={350}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Result" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={type === 'week' ? "TestExecuted" : 'TotalDefects'} stackId="a" fill="#0088FE" />
      <Bar dataKey={type === 'week' ? "PassedTest" : 'OpenDefects'} stackId="a" fill="green" />
      <Bar dataKey={type === 'week' ? "FailedTest" : 'FixedDefects'} stackId="a" fill="red" />
      {/* {type === 'defect' ? <Bar dataKey="TodoDefects" stackId="a" fill="#ccc" /> : ''} */}
    </BarChart>
  );
};

ProcessPieChart.propTypes = {
  data: PropTypes.array
};

export default ProcessPieChart;
