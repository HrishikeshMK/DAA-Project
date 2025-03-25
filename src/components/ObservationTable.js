import React from "react";
import { obs  } from "../data";

const CliqueTable = () => {
  return (
    <div className="table-container">
      <h1 style={{ textAlign: "center" }}>Other statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Maximum Clique Size</th>
            <th>Total Maximal Cliques</th>
          </tr>
        </thead>
        <tbody>
          {obs.map((row, index) => (
            <tr key={index}>
              <td><strong>{row.dataset}</strong></td>
              <td>{row.maxCliqueSize}</td>
              <td>{row.totalCliques}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CliqueTable;