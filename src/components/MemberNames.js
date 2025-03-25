import React from "react";
import { ids } from "../data.js"; // Import data.js

const MemberNames = () => {
    return (
        <div className="table-container">
            <h1 style={{ textAlign: "center" }}>Contributors</h1>
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
                                <td>{person.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MemberNames;
