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
      {type === 'defect' ? <Bar dataKey="OpenDefects" stackId="a" fill="red" /> : <Bar dataKey="TestExecuted" stackId="a" fill="#0088FE" />}
      {type === 'defect' ? <Bar dataKey="TotalDefects" stackId="b" fill="green" /> : <Bar dataKey="PassedTest" stackId="a" fill="green" />}
      {type === 'defect' ? <Bar dataKey="TodoDefects" stackId="c" fill="#FF8042" /> : <Bar dataKey="FailedTest" stackId="a" fill="red" />}
      {type === 'defect' ? <Bar dataKey="FixedDefects" stackId="d" fill="orange" /> : ''}
    </BarChart>
  );
};

ProcessPieChart.propTypes = {
  data: PropTypes.array
};

export default ProcessPieChart;
