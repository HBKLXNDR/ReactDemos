import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [delCars, setDelCars] = useState([null]);

    useEffect(() => {
        cars && carService.getAll().then(({data}) => setCars(data))
    }, [newCar, updatedCar, delCars])

    // useEffect(() => {
    //     if (newCar) {
    //         setCars(prevState => [...prevState, newCar])
    //         if (delCars) {
    //             setCars(cars.filter(car => car.id !== delCars))
    //         }
    //     }
    // }, [newCar, delCars])
    //
    //
    // useEffect(() => {
    //     if (updatedCar) {
    //         const car = cars.find(car => car.id === updatedCar.id);
    //         Object.assign(car, updatedCar);
    //         setCars([...cars])
    //     }
    // }, [updatedCar])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDelCars={setDelCars}/>)}
        </div>
    );
};

export {Cars};