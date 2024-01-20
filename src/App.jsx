// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationPage from "./components/registration";
import DetailsPage from "./components/details";
import ProfileUpdatePage from "./components/profileUpdate";
import './App.module.css';

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
        <nav>
          <ul>
            <li>
              {/* due to the error "No routes matched location '/'" now making the registration page to take the space ie acting like the index page */}
              <Link to="/">Registration</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/profile-update">Profile Update</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* this small code down here is written so as to remove the '/' displayed at the link of the page which doestnt look nice*/}
          {/* <Route
            index
            element={
              <main>
                <p>landing page</p>
              </main>
            }
          /> */}

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
