import "./App.css";
import { useState } from "react";
function App() {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <div className="display">
          <h1>Counter App</h1>
          <h1>
            <span>{Counter}</span>
          </h1>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(Counter + 1)}
        >
          Increment +1
        </button>
        <br />
        <br />
        <button
          className="btn btn-info "
          onClick={() => setCounter(Counter - 1)}
        >
          Decrement -1
        </button>{" "}
        <br />
        <br />
        <button className="btn btn-danger" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
