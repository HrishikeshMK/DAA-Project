import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../styles/App.css";

const HistogramChart = ({ name, data, title, xLabel, yLabel, color }) => {
  return (
    <div className="section" id={title + name}>
      <h3 style={{ textAlign: "center" }}>{title} for dataset: {name}</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" label={{ value: xLabel, position: "bottom", dy: 10 }} />
            <YAxis label={{ value: yLabel, angle: -90, position: "left", dy: -60 }} />
            <Tooltip cursor={{ fill: "rgba(200,200,200,0.5)" }} />
            <Bar dataKey="y" fill={color} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistogramChart;