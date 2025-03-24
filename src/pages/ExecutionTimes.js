import React from "react";
import HistogramChart from "../components/HistogramChart";
import "../styles/App.css";

const ExecutionTimes = ({ data, name, xLabel, yLabel}) => {
  return (
    <div className="section" id={"execution-times" + name}>
      <h2>Comparison of Execution Times for Dataset: {name}</h2>
      <HistogramChart 
        data={data}  
        xLabel={xLabel} 
        yLabel={yLabel}
      />
    </div>
  );
};

export default ExecutionTimes;
