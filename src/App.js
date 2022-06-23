import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
