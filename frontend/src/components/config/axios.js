import axios from "axios";

const clienteAxios = axios.create({
     baseURL: process.env.REACT_APP_BACKEND_URL
}) 
// console.log("process.env.REACT_APP_BACKEND_URL", process.env.REACT_APP_BACKEND_URL)
// console.log("process.env.NODE_ENV", process.env.NODE_ENV)
// console.log("process.env", process)
export default clienteAxios;