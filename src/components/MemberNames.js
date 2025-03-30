import React from "react";
import { ids } from "../data.js";

const MemberNames = () => {
    return (
        <div className="table-container">
            <h1 style={{ textAlign: "center", color: "#4285F4" }}>CONTRIBUTORS</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((person, index) => {
                        return (
                            <tr key={index} >
                                <td>{person.id}</td>
                                <td><a href={person.github} target="_blank" rel="noopener noreferrer">{person.name}</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MemberNames;
