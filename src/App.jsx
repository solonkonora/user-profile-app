// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/registration";
import DetailsPage from "./pages/details";
import ProfileUpdatePage from "./pages/profileUpdate";
import NavBar from "./components/nav-bar/nav-bar";

const App = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
{/* rather use the page as props */}
          <Route path="/" element={<RegistrationPage />} />

          <Route path="/details" element={<DetailsPage profile={profile} />} />

          <Route path="/profile-update" element={<ProfileUpdatePage profile={profile} onUpdate={handleProfileUpdate} /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
