// Rechart.jsx (Full Code)

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Rechart = ({ reverseRatings }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={reverseRatings}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <YAxis dataKey="name" type="category"></YAxis>
        <XAxis dataKey="count" type="number"></XAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey="count" fill="#ff8c00" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
