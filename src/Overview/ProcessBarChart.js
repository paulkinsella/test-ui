import PropTypes from "prop-types";
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const ProcessPieChart = ({ data }) => {
  console.log("Chart Data", data);
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
      <XAxis dataKey="TestName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="passed" stackId="a" fill="#0088FE" />
      <Bar dataKey="failed" stackId="a" fill="#FF8042" />
      <Bar dataKey="testExecuted" stackId="a" fill="#ccc" />
      <Bar dataKey="testInProgress" stackId="a" fill="#ccc" />
    </BarChart>
  );
};

ProcessPieChart.propTypes = {
  data: PropTypes.array
};

export default ProcessPieChart;
