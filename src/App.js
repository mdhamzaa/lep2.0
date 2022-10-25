import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar'
import Home from './components/Home'
import Login from './components/Login'
import ContactUs from './components/ContactUs'
import RegisterEmployee from "./components/RegisterEmployee";
import RegisterEmployer from "./components/RegisterEmployer";

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
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
