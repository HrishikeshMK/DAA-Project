import React from "react";
import Navbar from "./components/Navbar";
import HistogramChart from "./components/HistogramChart";
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
            <p> A <span class="color-word">clique</span> in graph theory, is a <span class="color-word">subset of vertices </span> 
            in an undirected graph where <span className="color-word"> every two vertices</span> in the subset are 
            <span class ="color-word"> connected</span> by an edge, forming a <span class ="color-word">complete subgraph</span>.
            i.e, all vertices are <span class ="color-word">adjacent</span> to each other.</p>
            <p>We have implemented three algorithms in C++ in the <a href="https://github.com/HrishikeshMK/DAA-Project">project page</a>, and have analysed their performance on three datasets which can be 
            found in the Datasets section.</p>
          </div>
          <div id ="Algorithms" style={{ textAlign: "center" }}>
            <h1 style={{color:"#4285F4"}}>Algorithms</h1>
              <h2 style={{color:"#ffce44"}}>Tomita's Algorithm</h2>
              <p><strong>Tomita's Algorithm</strong> for finding maximal cliques uses a depth first search (backtracking) method to
                generate all maximal cliques for an undirected graph. It makes use of a Global set Q, initially
                empty, which it expands using the expand function. Set Q stores subgraph constituting the cliques at
                each instance of expand function. Size of MAXCLIQUES at the end of the algorithm gives the number of
                cliques.</p>
              <h2 style={{color:"#db4437"}}>Bron-Kerbosch Algorithm (ELS)</h2>
              <p><strong>Bron-Kerbosch algorithm</strong> is designed to find the maximum clique in an undirected graph. It employs
                several pruning techniques to efficiently find the maximum clique, including vertex ordering,
                degree-based pruning, and recursive exploration.</p>
              <h2 style={{color:"#0f9d58"}}>Chiba's Algorithm</h2>
              <p><strong>Chiba's Algorithm</strong> follows a recursive approach, exploring vertex neighborhoods to identify and extend
                maximal cliques. It maintains efficiency through vertex ordering by degree and uses data structures
                S and T throughout the algorithm.</p>              
          </div>
          <div id="Datasets" style={{ textAlign: "center" }}>
            <h1 style={{color:"#4285F4"}}>Datasets</h1>
            <h2 style={{color:"#ffce44"}}>Wikipedia vote network</h2>
            <p><strong><a href="https://snap.stanford.edu/data/wiki-Vote.html">Wiki-Vote</a></strong> is a directed graph representing the Wikipedia voting network. The nodes represent the 
            Wikipedia users and the edges represent the votes between the users. The dataset contains
            <span class="color-word"> 7115</span> nodes and <span class="color-word">103689</span> edges.</p>
            <h2 style={{color:"#db4437"}}>Email-Enron network</h2>
            <p><strong><a href="https://snap.stanford.edu/data/email-Enron.html">Email-Enron</a></strong> is a directed graph representing the email communication network of the Enron corporation. 
            The nodes represent the employees and the edges represent the emails between the employees. 
            The dataset contains <span class="color-word">36692</span> nodes and <span class="color-word">183831</span> edges.</p>
            <h2 style={{color:"#0f9d58"}}>Autonomous systems by Skitter</h2>
            <p><strong><a href="https://snap.stanford.edu/data/as-Skitter.html">Autonomous systems by skitter</a></strong> is a directed graph representing the internet topology. The nodes represent the routers and 
            the edges represent the connections between the routers. The dataset contains <span class="color-word">1696415 </span> 
            nodes and <span class="color-word">11095298</span> edges.</p>
          </div>
          <div id="Exec-times">
            <h1 style={{ textAlign: "center", color:"#4285F4" }}>Observations</h1>
            <h2 style={{ textAlign: "center" }}>Comparison of execution times</h2>
            <HistogramChart data={executionTimesData1} title ="Comparison of Execution times" name= "Wiki-Vote" xLabel="Algorithm" yLabel="Execution time (ms)" color="#ffce44"/>
            <HistogramChart data={executionTimesData2} title ="Comparison of Execution times" name= "Email-Enron" xLabel="Algorithm" yLabel="Execution time (ms)" color="#db4437"/>
            <HistogramChart data={executionTimesData3} title ="Comparison of Execution times" name= "as-skitter" xLabel="Algorithm" yLabel="Execution time (ms)" color="#0f9d58"/>
          </div>
          <div id="Cliq-dist">
            <h2 style={{ textAlign: "center" }}>Maximal Clique Distibution</h2>
            <HistogramChart data={datasetAnalysisData1} title ="Max-Clique Distribution" name= "Wiki-Vote" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#ffce44"/>
            <HistogramChart data={datasetAnalysisData2} title ="Max-Clique Distribution" name= "Email-Enron" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#db4437"/>
            <HistogramChart data={datasetAnalysisData3} title ="Max-Clique Distribution" name= "as-skitter" xLabel="Clique-Distribution" yLabel="Number of max-cliques" color="#0f9d58"/>
          </div>
          <div id="other-statistics">
            < CliqueTable />
          </div>
          <div id = "Members">
            < MemberNames />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;