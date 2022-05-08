import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: []}

const dogSlice = createSlice({
    name: "dogSlice",
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newDog = {name, id: new Date().getTime()};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex((dog) => dog.id === id)
            state.dogs.splice(index, 1)
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog
        },
        updateDog: (state, action) => {
            const {id, name}= action.payload
            const index = state.dogs.findIndex((dog)=>dog.id=== id)
            state.dogs[index].name = name
            state.dogForUpdate = false
        }

    }

})

const {reducer, actions: {addDog, deleteDog, setDogForUpdate, updateDog}} = dogSlice

export default reducer;

export const actionsDog = {
    addDog,
    deleteDog,
    setDogForUpdate,
    updateDog
}