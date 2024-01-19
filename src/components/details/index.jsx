// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from './details.module.css';

const DetailsPage = ({ profile }) => {
  return (
    <div>
      <h1 className={styles.heading}>Profile Details</h1>
      <p>
        <span className={styles.label}>First Name:</span> {profile.firstName}
      </p>
      <p>
        <span className={styles.label}>Last Name:</span> {profile.lastName}
      </p>
      <p>
        <span className={styles.label}>Email:</span> {profile.email}
      </p>
      <p>
        <span className={styles.label}>Phone Number:</span> {profile.phoneNumber}
      </p>
    </div>
  );
};

export default DetailsPage;