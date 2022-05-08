import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    status: null,
    formErrors: {}
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    "create",
    async ({car}, {getState, dispatch, rejectWithValue}) => {
        try {
            const store = getState();
            console.log(store);
            const {data} = await carService.create(car)
            dispatch(create({car: data}))
        } catch (e) {
            rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = "pending"
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = "rejected"
        },

        [createAsync.fulfilled]: (state, action) => {
        },
        [createAsync.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status
            state.formErrors = formErrors
        }
    }
});

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll, createAsync
}

export {
    carReducer,
    carActions
}