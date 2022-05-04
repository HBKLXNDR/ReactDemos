import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state = 0, action) {
    switch (action.type) {
        case "INC":
            return state+ action.payload;
        case "DEC":
            return state- action.payload;

        case "RESET":
            state = action.payload
            return state
        default:
            return state;
    }

}

let store = createStore(reducer);


root.render(<Provider store={store}>
        <App/>
    </Provider>
)
