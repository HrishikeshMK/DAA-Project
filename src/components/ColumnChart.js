import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../styles/App.css";

const ColumnChart = ({ data, title }) => {
  return (
    <div className="chart-container">
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: "Categories", position: "bottom", dy: 20 }} />
          <YAxis label={{ value: "Values", angle: -90, position: "left" }} />
          <Tooltip cursor={{ fill: "rgba(200,200,200,0.5)" }} />
          {data.map((entry, index) => (
            <Bar key={index} dataKey="y" fill={entry.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ColumnChart;