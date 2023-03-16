import './App.css';
// Importation des modules
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from './context/AuthContext';
import axios from 'axios';


// Importation des pages
import Home from "./pages/home/Home";
import Navbar from './components/Navbar/Navbar.jsx';
import Recherche from './pages/Recherche/recherche.jsx'

// App
function App() {
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    axios.get('api/users/verifytoken', { withCredentials: true })
      .then((res) => {
        console.log("data verify", res.data)
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/recherche' element={<div style={{ height: "100vh" }}><Recherche /></div>} />

        /** Ne rien mettre en dessous de cette route */
        <Route path="*" element={<h1> error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;