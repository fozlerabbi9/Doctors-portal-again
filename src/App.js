import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './ComponentFile/AboutFile/About';
import Bloge from './ComponentFile/BlogsFile/Bloge';
import Home from './ComponentFile/HomeFile/Home';
import NaveBar from './ComponentFile/NaveBarFile/NaveBar';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <NaveBar></NaveBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="bloge" element={<Bloge></Bloge>}></Route>
      </Routes>

    </div>
  );
}

export default App;
