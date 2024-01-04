import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <div className="App">
            <Counter />
            <br/>
            <ClassCounter />
            <br/>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default App;
