import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";


/** Gets array of dogs and displays navigation bar and list of dogs
 *
 *  App --> { Nav, DogList, DogDetails }
 */

function App() {
  const [dogs, setDogs] = useState([]);
  console.log('App', dogs, 'dogs***********');
  
  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    setDogs(() => response.data);
  }

  if(dogs.length === 0){
    getDogs();
    return( <div>Waiting for the dogs!</div>);
  } 

  return (
    <div className="App">
      <h1>FIND THE DOGS!</h1>
      <div className="App-body">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:dogName" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
