import React from 'react';
import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDelCars}) =>{
    const {id,model, price,year} = car;
    const deleteCar = async ()=>{
       await carService.deleteById(id)
        setDelCars(id)
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>deleteCar()}>DeleteCar</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <br/>
            <br/>
        </div>
    );
}

export {Car};