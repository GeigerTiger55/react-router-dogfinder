import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogDetails from './DogDetails';
import DogList from './DogList';

const DOG_NAMES = ['perry', 'whiskey', 'duke'];

/**
 * 
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogList dogNames={DOG_NAMES}/>} />
          <Route path="/dogs" element={<DogList dogNames={DOG_NAMES}/>} />
          <Route path="/dogs/:dogName" element={<DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
