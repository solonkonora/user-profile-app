/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './update.css'; // normal CSS file

const ProfileUpdatePage = ({ profile, onUpdate }) => {
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedProfile = {
      ...profile,
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    onUpdate(updatedProfile);
  };

  return (
    <div className="profile-update">
      <h3 className="profile-title">Profile Update</h3>
      <form className="profile-form" onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="profile-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="profile-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="profile-input"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="profile-input"
        />
        <button type="submit" className="profile-button">Update</button>
      </form>
    </div>
  );
};

export default ProfileUpdatePage;
