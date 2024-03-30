import React, { useEffect, useState } from "react";
import './edit.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BAKCEND_URL } from "../../../api/dataAPI";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css';

let intialObject = {
    empId : "",
    empName : "",
    empSelary : "",
    empRole : ""

}
export default function Edit(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState(intialObject);

    // input handler function for input
    const inputHandler = (event) => {
         const name = event.target.name;
         const value = event.target.value;
        setFormData({...formData, [name]: value})
    }

    // getData ById:
    const getById = () => {
            axios.get(`${BAKCEND_URL}/emp/getByIdEmp/${id}`)
            .then((response) => {
                console.log(response.data);
                setFormData(response.data.data);
            })
            .catch((error) => {
                console.log(`Error occred!!!`);
                // error: error.message;
        })
    }
    // getById();
    useEffect(() => {
        getById();
    },[])

    // submitHandler for update emp data
    const submitHandler = async(event) => {
        event.preventDefault();

        const updateById = {
            empId: formData.empId,
            empName: formData.empName,
            empRole: formData.empRole,
            empSelary: formData.empSelary
        }

        // axios.put(`${BAKCEND_URL}/emp/updateEmp/${id}`,{
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(updateById),
        // })
        fetch(`${BAKCEND_URL}/emp/updateEmp/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateById),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            // navigate("/");
            window.location.href = "/";
          })
        .catch((error) => {
            console.log(`Error occured!!!`);
        })
    }

    return(
        <div className="addEMP-container">
      <div className="addEMPform">
        <h1 className="addEMPTitle">Edit EMP Data</h1>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empId
          </label>
          <input
            name = "empId"
            className="addItemInput"
            value={formData.empId}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empName
          </label>
          <input
            name ="empName"
            className="addItemInput"
            value={formData.empName}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empSelary
          </label>
          <input
            name = "empSelary"
            className="addItemInput"
            value={formData.empSelary}
            onChange={inputHandler}
          />
        </div>
        <div className="addEMPitems">
          <label htmlFor="" className="addItemLabel">
            empRole
          </label>
          <input
            name = "empRole"
            className="addItemInput"
            value={formData.empRole}
            onChange={inputHandler}
          />
        </div>
        <button className="submit"
          onClick={submitHandler}
        >Update</button>
        <ToastContainer />
      </div>
    </div>
    )
}