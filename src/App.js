import React from "react";
import Navbar from "./components/Navbar";
import ExecutionTimes from "./pages/ExecutionTimes";
import DatasetAnalysis from "./pages/DatasetAnalysis";
import MemberNames from "./components/MemberNames";
import CliqueTable from "./components/ObservationTable.js";
import "./styles/App.css";
import { executionTimesData1, executionTimesData2, executionTimesData3, datasetAnalysisData1, datasetAnalysisData2, datasetAnalysisData3, Wiki, Email, asSkitter } from "./data.js";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div className="main-body">
          
          <div id="Exec-times">
            <h1 style={{ textAlign: "center" }}>Observations</h1>
            <h2 style={{ textAlign: "center" }}>Comparison of execution times</h2>
            <ExecutionTimes data={executionTimesData1} title ="Comparison of Execution times" name= "Wiki-Vote" xLabel="Algorithm" yLabel="Execution time (ms)" color="#ffce44"/>
            <ExecutionTimes data={executionTimesData2} title ="Comparison of Execution times" name= "Email-Enron" xLabel="Algorithm" yLabel="Execution time (ms)" color="#db4437"/>
            <ExecutionTimes data={executionTimesData3} title ="Comparison of Execution times" name= "as-skitter" xLabel="Algorithm" yLabel="Execution time (ms)" color="#0f9d58"/>
          </div>
          <div id="Cliq-dist">
            <h2 style={{ textAlign: "center" }}>Maximal Clique Distibution</h2>
            <ExecutionTimes data={datasetAnalysisData1} title ="Max-Clique Distribution" name= "Wiki-Vote" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#ffce44"/>
            <ExecutionTimes data={datasetAnalysisData2} title ="Max-Clique Distribution" name= "Email-Enron" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#db4437"/>
            <ExecutionTimes data={datasetAnalysisData3} title ="Max-Clique Distribution" name= "as-skitter" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#0f9d58"/>
          </div>
          <div id="other-statistics">
            < CliqueTable/>
          </div>
          <div id = "Members">
            < MemberNames/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;