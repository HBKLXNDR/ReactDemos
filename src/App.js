import React, {useReducer} from 'react';

const init = (initCount) => {
    return {count1: initCount, count2: initCount}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "inc":
            return {...state, count1: state.count1 + 1}
        case "dec":
            return {...state, count1: state.count1 - 1}
        case "reset": {
            return {...state, count1: 0}
        }
        case "set": {
            return {...state, count1: action.payload}
        }
    }
}


const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    // const inc = () => {
    //     dispatch({type: "inc"})
    // }
    //
    // const dec = () => {
    //     dispatch({type: "dec"})
    // }

    return (
        <div>
            <div>
                {state.count1}
                <button onClick={() => dispatch({type: "inc"})}>inc</button>
                <button onClick={() => dispatch({type: "dec"})}>dec</button>
                <button onClick={() => dispatch({type: "reset"})}>reset</button>
                <button onClick={() => dispatch({type: "set", payload: 10})}>setTo10</button>
            </div>
        </div>
    );
};


export default App;