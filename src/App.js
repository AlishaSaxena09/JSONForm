import { Route, Routes } from "react-router-dom";
import "./App.css";
import JSONForm from "./components/JSONForm";
import JSONFormOne from "./components/JSONFormOne";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JSONForm />}></Route>
        <Route path="/form2" element={<JSONFormOne />}></Route>
      </Routes>
    </div>
  );
}

export default App;
