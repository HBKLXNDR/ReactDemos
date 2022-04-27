import React, {useState} from 'react';
import {ClassComponent} from "./components";
import {FunctionComponent} from "./components/FunctionComponent";

const App = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <div> {flag && <FunctionComponent  ssss={"My PrOpS"}/>}</div>
            <button onClick={() => setFlag(prev => !prev)}>Hide</button>
        </div>
    );
};

export default App;