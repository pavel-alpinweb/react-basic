import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'

function App() {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong className="post__title">1. JavaScript</strong>
                    <div>
                        JavaScript - язык программирования
                    </div>
                </div>
                <div className="post__btns">
                    <button className="post__delete">Удалить</button>
                </div>
            </div>
            <br/>
            <Counter/>
            <br/>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default App;
