import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {CarDetail} from "../../components";
import {carService} from "../../services";


const SingleCarPage = () => {
    const [car, setCar] = useState(null);
    const {state} = useLocation();
    const {carID} = useParams();

    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            carService.getById(carID).then(({data}) => setCar(data))
        }
    }, [])

    return (
        <div>
            {
                car && <CarDetail car={car}/>
            }
        </div>
    );
};

export {SingleCarPage};