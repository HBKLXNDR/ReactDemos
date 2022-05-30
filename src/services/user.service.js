import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService ={
    create:(user)=>axiosService.post(urls.users, user)
}

export {
    userService
}