import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './ComponentFile/AboutFile/About';
import Appointment from './ComponentFile/AppointmentFile/Appointment';
import Bloge from './ComponentFile/BlogsFile/Bloge';
import Home from './ComponentFile/HomeFile/Home';
import Login from './ComponentFile/LoginFile/Login';
import NaveBar from './ComponentFile/NaveBarFile/NaveBar';
import NotFound from './ComponentFile/NotFoundFile/NotFound';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line
import "swiper/css/bundle";
import Register from './ComponentFile/LoginFile/Register';
import RequireAuth from './ComponentFile/RequireAuthFile/RequireAuth';
import { useState } from 'react';
import MyAppointment from './ComponentFile/MyAppointmentFile/MyAppointment';
import DashBoard from './ComponentFile/DashboardFile/DashBoard';
import Reviews from './ComponentFile/ReviewsFile/Reviews';
import MyHistore from './ComponentFile/MyhistoryFile/MyHistore';
import AllUsers from './ComponentFile/AllUsersFile/AllUsers';
// import "./styles.css";

function App() {
  // const [registerValue, setRegisterValue] = useState(false);
  // const location = useLocation();
  // console.log(registerValue);
  // const pathName = location?.pathname
  // if (pathName === "/register") {
  //   setRegisterValue(true)
  // }

  return (
    <div className="App">
      {/* <Home></Home> */}

      <NaveBar></NaveBar>
      {/* {
        registerValue ? "" : <NaveBar></NaveBar>
      } */}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        
        <Route path='dashboard' element={
          <RequireAuth>
            <DashBoard>
            </DashBoard>
          </RequireAuth>
        } >
          {/* <Route index  element={<MyAppointment></MyAppointment>}></Route> */}
          <Route index path='/dashboard' element={<MyAppointment></MyAppointment>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
          <Route path='myHistory' element={<MyHistore></MyHistore>}></Route>
          <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
        </Route>

        <Route path="bloge" element={<Bloge></Bloge>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />


    </div>
  );
}

export default App;
