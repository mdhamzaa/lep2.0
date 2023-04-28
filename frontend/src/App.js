import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar'
import Home from './components/Home'
import Login from './components/Login'
import ContactUs from './components/ContactUs'
import RegisterEmployee from "./components/RegisterEmployee";
import RegisterEmployer from "./components/RegisterEmployer";
import Dashboard from "./components/Dashboard";
import Search from './components/Search'
import { ProSidebarProvider } from 'react-pro-sidebar';
// import Payment from "./components/Payment";
import Bookings from "./components/Bookings";
import History from "./components/History";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Analytics from "./components/Analytics";
import Employees from "./components/Employees";
import Employers from "./components/Employers";
import UpdateEmployer from "./components/UpdateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

import Workhistory from "./components/Workhistory"
import RegistrationChoice from "./components/RegistrationChoice";
import NoPage from "./components/NoPage";
import Actions from "./components/Actions";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectAllUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import AboutUs from "./components/About";

function App() {
  const user = useSelector(selectAllUser);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <Routes> */}

        {!user &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/employee-register" element={<RegisterEmployee />} />
            <Route path="/employer-register" element={<RegisterEmployer />} />
            <Route path="registration-choice" element={<RegistrationChoice />} />
            <Route path="*" element={<Login />} />
          </Routes>
        }
        {
          (user?.level === "Employee" || user?.level === "Employer") &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/dashboard" element={<ProSidebarProvider> <Dashboard /> </ProSidebarProvider>} >

              <Route path="Profile" element={<Profile />} />
              <Route path="UpdateEmployee" element={<UpdateEmployee />} />
              <Route path="UpdateEmployer" element={<UpdateEmployer />} />
              <Route path="History" element={<History />} />
              <Route path="Booking" element={<Bookings />} />
              <Route path="Logout" element={<></>} />
            </Route>
            <Route path="/payment" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        }

        {(user?.level === "Employer") &&
          <Routes>
            <Route path="/search" element={<Search />} />
          </Routes>

        }


        {
          (user?.level === "Admin") &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<ProSidebarProvider style={{}}>
              <Admin />
            </ProSidebarProvider>} >
              <Route path="Analytics" element={<Analytics />} />
              <Route path="Employers" element={<Employers />} />
              <Route path="Employees" element={<Employees />} />
              <Route path="Workhistory" element={<Workhistory />} />
              <Route path="Actions" element={<Actions />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        }

        {/*  />

          

          
          
           */}

        {/* </Routes> */}
      </BrowserRouter >
    </div >
  );
}

export default App;
