import React from "react";
import HistogramChart from "../components/HistogramChart";
import "../styles/App.css";

const DatasetAnalysis = ({ data, name }) => {
  return (
    <div className="section" name={"analysis-dataset" + name}>
      <h2>Findings</h2>
      <HistogramChart 
        data={data} 
        title="Dataset Analysis" 
      />
    </div>
  );
};

export default DatasetAnalysis;