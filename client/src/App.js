import './App.css';
import Home from "./components/Home";
import AddEMP from "./pages/add/AddEMP";
import {Routes, Route } from "react-router-dom";
import Edit from './pages/add/edit/Edit';


function App() {
  return (
    <div className="App">
      {/* <h1>App Components</h1> */}
      {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/addEMP" element={<AddEMP />} />
          <Route path='/emp/updateEmp/:id' element={<Edit />} />
        </Routes>
    </div>
  );
}

export default App;
