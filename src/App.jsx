import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/registration";
import DetailsPage from "./pages/details";
import ProfileUpdatePage from "./pages/profileUpdate";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/profile-update" element={<ProfileUpdatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
