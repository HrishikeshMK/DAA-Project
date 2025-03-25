import React from "react";
import Navbar from "./components/Navbar";
import ExecutionTimes from "./pages/Plotter.js";
import MemberNames from "./components/MemberNames";
import CliqueTable from "./components/ObservationTable.js";
import "./styles/App.css";
import { executionTimesData1, executionTimesData2, executionTimesData3, datasetAnalysisData1, datasetAnalysisData2, datasetAnalysisData3 } from "./data.js";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div className="main-body"> 
          <div id="Intro" style={{ textAlign: "center" }}>
            <h1 style={{color:"#4285F4"}}>Introduction</h1>
            <p> A <span class="color-word">clique</span> in graph theory, is a <span class="color-word">subset of vertices</span> in an undirected graph where 
            <span className="color-word"> every two vertices</span> in the subset are 
            <span class ="color-word"> connected</span> by an edge, forming a <span class ="color-word">complete subgraph</span>.
            i.e, all vertices are <span class ="color-word">adjacent</span> to each other</p>
          </div>
          <div id ="Algorithms" style={{ textAlign: "center" }}>
            <h1 style={{color:"#4285F4"}}>Algorithms</h1>
              <h2 style={{color:"#ffce44"}}>Tomita's Algorithm</h2>
              <p>Tomita's Algorithm for finding maximal cliques uses a depth first search (backtracking) method to
                generate all maximal cliques for an undirected graph. It makes use of a Global set Q, initially
                empty, which it expands using the expand function. Set Q stores subgraph constituting the cliques at
                each instance of expand function. Size of MAXCLIQUES at the end of the algorithm gives the number of
                cliques.</p>
              <h2 style={{color:"#db4437"}}>Bron-Kerbosch Algorithm (ELS)</h2>
              <p>The MaxClique algorithm is designed to find the maximum clique in an undirected graph. It employs
                several pruning techniques to efficiently find the maximum clique, including vertex ordering,
                degree-based pruning, and recursive exploration.</p>
              <h2 style={{color:"#0f9d58"}}>Chiba's Algorithm</h2>
              <p>Chiba's Algorithm follows a recursive approach, exploring vertex neighborhoods to identify and extend
                maximal cliques. It maintains efficiency through vertex ordering by degree and uses data structures
                S and T throughout the algorithm.</p>              
          </div>
          <div id="Exec-times">
            <h1 style={{ textAlign: "center", color:"#4285F4" }}>Observations</h1>
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