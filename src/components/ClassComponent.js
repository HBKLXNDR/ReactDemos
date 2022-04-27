import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 25
        }
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}))
    }

    render() {
        return (
            <div>
                Hello from Class Component
                <div>A:{this.props.ssss}</div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}

export {ClassComponent}