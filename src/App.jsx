import { useState } from "react";
import RegistrationPage from "./components/registration";
import ProfileUpdatePage from "./components/profileUpdate/index.jsx";
import ProfileDetailsPage from "./components/details/index.jsx";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1); // 1 = register, 2 = update, 3 = details
  const [profile, setProfile] = useState(null);

  const handleRegister = (newProfile) => {
    setProfile(newProfile);
    console.log("Profile registered:", newProfile);
    setStep(2);
  };

  const handleUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    console.log("Profile updated:", updatedProfile);
    setStep(3);
  };

  return (
    <div className="App">
      <h1>User Profile App</h1>

      {step === 1 && <RegistrationPage onRegister={handleRegister} />}

      {step === 2 && (
        <>
          <ProfileUpdatePage profile={profile} onUpdate={handleUpdate} />
          <button className="back-button" onClick={() => setStep(1)}>
            ← Back to Registration
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <ProfileDetailsPage profile={profile} />
          <button className="back-button" onClick={() => setStep(2)}>
            ← Back to Update
          </button>
        </>
      )}
    </div>
  );
};

export default App;
