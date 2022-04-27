import React, {useEffect, useState} from 'react';

function FunctionComponent(props) {
    const {ssss} = props;
    const [state, setState] = useState({a: 0, b: 25});

    const inc = () => {
        setState({...state, a: state.a + 1})
    }
    useEffect(()=>{

    },[])
    useEffect(()=>{

    },[props, state])
    return (
        <div>
            Hello from Function Component
            <div>A:{ssss}</div>
            <div>A:{state.a}</div>
            <div>B:{state.b}</div>
            <button onClick={() => inc()}>inc</button>
        </div>
    );
}

export {FunctionComponent};