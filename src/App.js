import React, {useState} from "react";
import './styles/App.css'
import Post from "./components/Post";

function App() {
    return (
        <div className="App">
            <Post post={{id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'}} />
        </div>
    );
}

export default App;
