import React, {useRef} from 'react';

const Form1 = () => {
    const name = useRef();
    const age = useRef();
    const submit = (e) => {
        e.preventDefault()
        const name1 = name.current.value
        const age1 = age.current.value
        const user = {name1, age1}
        console.log(user);
    }
    return (
        <form onSubmit={submit}>
            <div><label> Name:<input type="text" ref={name}/> </label></div>
            <div><label> Age:<input type="number" ref={age}/> </label></div>
            <button>Submit</button>
        </form>
    );
};

export {Form1};