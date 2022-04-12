import baseURL from "../constants/urls";
import axios from "axios";


const axiosService = axios.create({baseURL});
export {
    axiosService
}
