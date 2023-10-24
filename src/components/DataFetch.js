import axios from "axios";
import React, { useEffect, useState } from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./DataFetch.css"
function DataFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        // console.log(response.data.users);
       const dataArray = Object.values(response.data.users);
       setData(dataArray);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="heading">
      <h1>Dummy Data</h1>
      <table className="w-100 text-sm-start" id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} height={50} width={50} />
              </td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetch;
