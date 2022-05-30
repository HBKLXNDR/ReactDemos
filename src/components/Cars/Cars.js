import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};