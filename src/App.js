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
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/employee-register" element={<RegisterEmployee />} />
          <Route path="/employer-register" element={<RegisterEmployer />} />
          <Route path="/dashboard" element={<ProSidebarProvider> <Dashboard /> </ProSidebarProvider>} >
            <Route path="/dashboard/Profile/:username" element={<Profile />}  >
              <Route path="/dashboard/Profile/:username" element={<Profile />} />
            </Route>
            <Route path="/dashboard/History" element={<History />} />
            <Route path="/dashboard/Booking" element={<Bookings />} />

            <Route path="/dashboard/Logout" element={<></>} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="registration-choice" element={<JoinUs />} />

          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
