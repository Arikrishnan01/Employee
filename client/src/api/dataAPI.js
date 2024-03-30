import axios from "axios";

export const BAKCEND_URL = "http://localhost:5000";

export async function getAllEmp(){
    return axios.get(`${BAKCEND_URL}/emp/getAllEmp`)
}

// create new emp data
export async function createEMP(data){
    return axios.post(`http://localhost:5000/emp/createEmp`,data);
}