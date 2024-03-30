import React, { useState } from "react";
import "./addEMP.css";
import { createEMP } from "../../api/dataAPI";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import {useNavigate} from "react-router-dom";

export default function AddEMP() {

  //success
  // const notifySuccess = () => toast.success("Operation successful!", {
  //   position: "top-right",
  //   autoClose: 4000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });

  // failed
  // const notifyFailed = () => toast.error("Operation failed!", {
  //   position: "top-right",
  //   autoClose: 3000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
  
  
  const navigation = useNavigate();
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [empSelary, setEmpSalary] = useState(""); 
  const [loading, setLoading] = useState(false);

  // submit handler func
  const submitHandler = async() => {
    // e.preventDefault();
    try{
        const formData = {
          empId,
          empName,
          empRole,
          empSelary
        }
        setLoading(true);
        const response = await createEMP(formData);
        console.log(response);
        toast.success("Operation successful!", {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: ()=>{
            navigation("/");
          }
        })
        setEmpId("");
        setEmpName("");
        setEmpRole("");
        setEmpSalary("");
        setLoading(false);
        window.location.href='/';
    }
    catch(error){
      setLoading(true);
      console.log(`Error occured: ${error.message}`);
      notifyFailed();
      setLoading(false);
    }
  }

  return (
    <div className="addEMP-container">
      <div className="addEMPform">
        <h1 className="addEMPTitle">Add EMP Data</h1>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empId
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter empId"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empName
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter empName"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empSelary
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter empSalary"
            value={empSelary}
            onChange={(e) => setEmpSalary(e.target.value)}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empRole
          </label>
          <input
            type="text"
            className="addItemInput"
            placeholder="Enter empRole"
            value={empRole}
            onChange={(e) => setEmpRole(e.target.value)}
          />
        </div>
        <button className="submit"
          onClick={submitHandler}
          
          // isLoading = {loading}
        >Add</button>
        <ToastContainer />
      </div>
    </div>
  );
}
