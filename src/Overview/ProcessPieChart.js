import PropTypes from "prop-types";
import React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const ProcessPieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <PieChart width={500} height={350}>
      <Pie
        dataKey="value"
        data={data}
        cx={250}
        cy={150}
        innerRadius={60}
        outerRadius={120}
        fill="#82ca9d"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

ProcessPieChart.propTypes = {
  data: PropTypes.array
};

export default ProcessPieChart;
