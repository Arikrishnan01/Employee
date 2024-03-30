import React, { useEffect, useState } from "react";
import "./home.css";
import { BAKCEND_URL, getAllEmp } from "../api/dataAPI";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  /** fetch the backend data using axios */
  const fetchempData = async () => {
    const response = await getAllEmp();
    // console.log(response.data);
    if (!response.data.status === 200) {
      console.log("Error occured!!!");
      toast.error(`Error occured!!!`);
    }
    setUserData(response.data.data);
  };

  useEffect(() => {
    fetchempData();
  }, []);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <div className="home-header">
        <span className="home-header-title">Home</span>
        <span className="home-header-title">About</span>
        <span className="home-header-title">ContactUs</span>
      </div>
      <div className="addNew-con">
        <button className="addNewEmp" onClick={() => navigate(`/addEMP`)}>
          Add New
        </button>
      </div>
      <div className="home-contents">
        <table className="custom-table">
          <thead className="table-header">
            <tr>
              <th>EMP_ID</th>
              <th>EMP_NAME</th>
              <th>EMP_SALARY</th>
              <th>EMP_ROLE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 &&
              userData.map((row) => (
                <tr key={row._id}>
                  <td>{row.empId}</td>
                  <td>{row.empName}</td>
                  <td>{row.empSelary}</td>
                  <td>{row.empRole}</td>
                  <td>
                    <button className="tableEmpedit"
                        onClick={() => navigate(`/emp/updateEmp/${row._id}`)}
                    >Edit</button>
                  </td>
                  <td>
                    <button className="tableEmpeDelete"
                        onClick={() => {
                            axios.delete(`${BAKCEND_URL}/emp/deleteEmp/${row._id}`)
                            .then(toast.success("data deleted!!",{
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false
                            }))
                            .then(() => fetchempData())
                            // window.location.href="/"
                        }}
                    >Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
