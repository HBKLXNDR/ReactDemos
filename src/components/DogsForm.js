import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {actionsDog} from "../redux";

const DogsForm = () => {
    const [name, setName] = useState("")

    const {dogForUpdate} = useSelector(({dogs}) => dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name)
        }
    }, [dogForUpdate])

    const save = () => {
        if (dogForUpdate) {
            dispatch(actionsDog.updateDog({name, id: dogForUpdate.id}))
        } else {
            dispatch(actionsDog.addDog({name}))
        }
        setName("")
    }
    return (
        <div>
            <label>Dog name: <input type="text" onChange={(e) => setName(e.target.value)} value={name}/></label>
            <button onClick={save}>{dogForUpdate ? "update" : "create"}</button>
        </div>
    );
};

export {DogsForm};