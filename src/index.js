import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

import "./styles.css";

var destination = document.querySelector("#container");

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, destination);
