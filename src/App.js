import "./App.css";
import { useState } from "react";
function App() {
  const [Counter, setCounter] = useState(10);
  return (
    <div className="App">
      <div className="container">
        <h1>Counter App</h1>
        <h1>
          <span>{Counter}</span>
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(Counter + 1)}
        >
          Increment
        </button>
        <br />
        <br />
        <button
          className="btn btn-info "
          onClick={() => setCounter(Counter - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
