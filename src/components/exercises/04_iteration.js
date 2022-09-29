import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const list = props.modules.map((m, index) =>
    <tr key={index}>
      <td> {m.name} </td>
      <td> {m.noLectures} </td>
      <td> {m.noPracticals} </td>
    </tr>
  )
  return (
    <>  
    <h1>{props.course}</h1>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      {list}      
    </tbody >
  </table>
  </>
  );
};

export default Demo;
