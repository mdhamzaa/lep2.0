import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar'
import Home from './components/Home'
import Login from './components/Login'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
