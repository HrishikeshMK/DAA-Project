import React from "react";
import Navbar from "./components/Navbar";
import ExecutionTimes from "./pages/ExecutionTimes";
import DatasetAnalysis from "./pages/DatasetAnalysis";
import "./styles/App.css";
import { executionTimesData1, executionTimesData2, executionTimesData3, datasetAnalysisData1, datasetAnalysisData2, datasetAnalysisData3, Wiki, Email, asSkitter } from "./data.js";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div className="main-body">
          <ExecutionTimes data={executionTimesData1} title ="Comparison of Execution times" name= "Wiki-Vote" xLabel="Algorithm" yLabel="Execution time (ms)"/>
          <ExecutionTimes data={executionTimesData2} title ="Comparison of Execution times" name= "Email-Enron" xLabel="Algorithm" yLabel="Execution time (ms)"/>
          <ExecutionTimes data={executionTimesData3} title ="Comparison of Execution times" name= "as-skitter" xLabel="Algorithm" yLabel="Execution time (ms)"/>
          <ExecutionTimes data={datasetAnalysisData1} title ="Max-Clique Distribution" name= "Wiki-Vote" xLabel="Clique-Distribution" yLabel="Number of max-cliques"/>
          <ExecutionTimes data={datasetAnalysisData2} title ="Max-Clique Distribution" name= "Email-Enron" xLabel="Clique-Distribution" yLabel="Number of max-cliques"/>
          <ExecutionTimes data={datasetAnalysisData3} title ="Max-Clique Distribution" name= "as-skitter" xLabel="Clique-Distribution" yLabel="Number of max-cliques"/>
          <h2>Total Number of Maximal Cliques in each Dataset</h2>
          <h4>Wiki-Vote - {Wiki}</h4>
          <h4>Email-Enron - {Email}</h4>
          <h4>as-skitter - {asSkitter}</h4>
        </div>
      </main>
    </div>
  );
};

export default App;