import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const First = () => {
    const {id} = useParams();
    const location = useLocation();

    return (
        <div>
            First
            <div>{id}</div>
        </div>
    );
};

export {First};