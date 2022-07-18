import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";


/**
 *
 *
 */
//TODO: ajax call -install axios make call - state for dog data
function App() {
  const [dogs, setDogs] = useState(getDogs);
  console.log('App', dogs, 'dogs***********');
  
  async function getDogs() {
    const dogs = await axios.get("localhost:5001/dogs");
    return dogs;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:dogName" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
