// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegistrationPage from './components/registration';
import DetailsPage from './components/details';
import ProfileUpdatePage from './components/profileUpdate';
// import styles from '.App.css'

const App = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/profile-update">Profile Update</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/details">
            <DetailsPage profile={profile} />
          </Route>
          <Route path="/profile-update">
            <ProfileUpdatePage profile={profile} onUpdate={handleProfileUpdate} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;