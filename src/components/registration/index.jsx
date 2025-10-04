// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './registration.css'; // import normal CSS

// eslint-disable-next-line react/prop-types
const RegistrationPage = ({ onRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const profile = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    onRegister(profile);
  };

  return (
    <div className="registration-page">
      <h3 className="registration-title">Registration Page</h3>
      <form className="registration-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="registration-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="registration-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration-input"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="registration-input"
        />
        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
