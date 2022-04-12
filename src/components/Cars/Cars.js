import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [delCars, setDelCars] = useState([null]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [newCar,delCars])

    // useEffect(()=>{
    //     newCar && setCars([...cars, newCar])
    //     if (delCars)
    // },[newCar,delCars])

    // useEffect(()=>{
    //     newCar && setCars([...cars, newCar])
    // },[newCar])




    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDelCars={setDelCars}/>)}
        </div>
    );
};

export {Cars};