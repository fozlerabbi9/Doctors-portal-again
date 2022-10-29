import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './ComponentFile/AboutFile/About';
import Appointment from './ComponentFile/AppointmentFile/Appointment';
import Bloge from './ComponentFile/BlogsFile/Bloge';
import Home from './ComponentFile/HomeFile/Home';
import Login from './ComponentFile/LoginFile/Login';
import NaveBar from './ComponentFile/NaveBarFile/NaveBar';
import NotFound from './ComponentFile/NotFoundFile/NotFound';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// eslint-disable-next-line
import "swiper/css/bundle";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <NaveBar></NaveBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path='appointment' element={<Appointment></Appointment>}></Route>
        <Route path="bloge" element={<Bloge></Bloge>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
