import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {

  const [phonesList, setPhonesList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getPhonesList()
  }, []);

  const getPhonesList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)

      setTimeout(() => {
        setPhonesList(response.data)
        setFetchingPhones(false)
      }, 1000)

    } catch(error) {
      navigate("error")
    }
  }

  if (fetchingPhones) {
    return (
      <div className="App">
        <Spinner animation="border" variant="info"/>     
        </div>
    )
  }


  return (
    <div className="App">
      <Navbar phonesList={phonesList}/>
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/phone-details/:phoneId" element={<PhoneDetails />} />

        <Route path="/error" element={ <Error/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
