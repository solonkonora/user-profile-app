import React from 'react';
import styles from './details.module.css'

const ProfileDetailsPage = ({ profile }) => {
  return (
    <div>
      <h1>Profile Details</h1>
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Email: {profile.email}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
    </div>
  );
};

export default ProfileDetailsPage;