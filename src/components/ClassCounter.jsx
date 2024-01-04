import React from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        };
    }

    increment = () => {
        this.setState({ likes: this.state.likes + 1 });
    }

    decrement = () => {
        this.setState({ likes: this.state.likes - 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.likes}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;