import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userServices = {
    getAll: ()=> axiosService.get(urls.users)
}
export {
    userServices
}