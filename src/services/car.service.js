import {urls} from "../constants";
import {axiosService} from "./axios.service";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (car) => axiosService.post(urls.cars, car),
    updateById: (id, newCar)=> axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}