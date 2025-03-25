import React from "react";
import HistogramChart from "../components/HistogramChart";
import "../styles/App.css";

const ExecutionTimes = ({ data, title, name, xLabel, yLabel, color}) => {
  return (
    <div className="section" id={title + name}>
      <h3 style={{ textAlign: "center" }}>{title} for dataset: {name}</h3>
      <HistogramChart 
        data={data}  
        xLabel={xLabel} 
        yLabel={yLabel}
        color={color}
      />
    </div>
  );
};

export default ExecutionTimes;
