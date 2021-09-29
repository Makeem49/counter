import React from "react";
import {render} from "react-dom"
import Counter from "./Increament.js";

 function App() {
    return <Counter></Counter>
}


render(<App></App>, document.querySelector('#root'))
