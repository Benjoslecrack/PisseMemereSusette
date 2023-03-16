import './App.css';
// Importation des modules
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from './context/AuthContext';
import axios from 'axios';


// Importation des pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Register from './pages/register/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import Contact from './pages/contact/Contact.jsx';

import Footer from './components/Footer/Footer';
import AllUser from './pages/AllUserPage/AllUser';

// App
function App() {
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    axios.get('api/users/verifytoken', { withCredentials: true })
      .then((res) => {
        console.log("data verify",res.data)
        if (res.data) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          })
        }
      })
  }, []);

  return (
    <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allusers" element={<AllUser />} />

          <Route path="/tarificateurs" element={<div style={{height:"100vh"}}>tarificateurs</div>} />
          <Route path="/articles/particuliers" element={<div style={{height:"100vh"}}>Particulier</div>} />
          <Route path="/articles/professionnels" element={<div style={{height:"100vh"}}>professionnels</div>} />
          <Route path="/articles/entreprises" element={<div style={{height:"100vh"}}>Entreprises</div>} />
          <Route path="/outils" element={<div style={{height:"100vh"}}>Outils</div>} />
          <Route path='/lexique' element={<div style={{height:"100vh"}}>Lexique</div>} />
          <Route path='/rgpd' element={<div style={{height:"100vh"}}>RGPD</div>} />
          <Route path='/dashboard' element={<div style={{height:"100vh"}}>Dashboard</div>} />

          {user && <Route path="/profile" element={<Profile />} />}

          <Route path="/contact" element={<Contact />} />




        /** Ne rien mettre en dessous de cette route */
          <Route path="*" element={<h1> error 404</h1>} />
        </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;