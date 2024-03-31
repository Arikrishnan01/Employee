import axios from "axios";

// export const BAKCEND_URL = "http://localhost:5000";
export const BAKCEND_URL = "https://employee-tv37.onrender.com";

export async function getAllEmp(){
    return axios.get(`${BAKCEND_URL}/emp/getAllEmp`)
}

// create new emp data
export async function createEMP(data){
    return axios.post(`https://employee-tv37.onrender.com/emp/createEmp`,data);
}