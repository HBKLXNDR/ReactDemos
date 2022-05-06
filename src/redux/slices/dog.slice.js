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
        }

    }

})

const {reducer, actions: {addDog, deleteDog}} = dogSlice

export default reducer;

export const actionsDog = {
    addDog,
    deleteDog
}