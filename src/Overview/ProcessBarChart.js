import PropTypes from "prop-types";
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const ProcessPieChart = ({ data }) => {
  console.log("Chart Data 2", data);
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
      <Bar dataKey="TestExecuted" stackId="a" fill="#0088FE" />
      <Bar dataKey="PassedTest" stackId="a" fill="green" />
      <Bar dataKey="FailedTest" stackId="a" fill="red" />
      {/* <Bar dataKey="TestsNotRun" stackId="a" fill="#ccc" /> */}
    </BarChart>
  );
};

ProcessPieChart.propTypes = {
  data: PropTypes.array
};

export default ProcessPieChart;
