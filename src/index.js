import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyProvider from "./MyProvider";
import MyComponent from "./MyComponent";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <MyComponent />
      </div>
    </MyProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
