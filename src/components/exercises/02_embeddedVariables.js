import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  let array = [{name: "DevOps", noLectures: 2, noPraticals: 2},
  {name: "Web App Dev 2", noLectures: 2, noPraticals: 2}]
  return (
    <>  
    <h1>HDip Computer Science - Module Table</h1>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>{array[0].name}</td>
        <td>{array[0].noLectures}</td>
        <td>{array[0].noPraticals}</td>
      </tr>
      <tr>
        <td>{array[1].name}</td>
        <td>{array[1].noLectures}</td>
        <td>{array[1].noPraticals}</td>
      </tr>
    </tbody >
  </table>
  </>
  );
};

export default Demo;
