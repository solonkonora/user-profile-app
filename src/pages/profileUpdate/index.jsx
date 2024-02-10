// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import styles from './update.module.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ProfileUpdatePage = ({ onUpdate }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
    .matches(/^[6][7][5-9]\d{6}$/, "Invalid phone number")
    .required('Phone Number is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },

    validationSchema,
    onSubmit: (values) => {
      onUpdate(values);

      // Store the updated form data in localStorage
      localStorage.setItem('formData', JSON.stringify(values));

      // using '/' since registration page is serving like the welcome page
      navigate('/');
    },
  });

  useEffect(() => {
    // Retrieve the form data from localStorage
    const storedFormData = localStorage.getItem('formData');

    if (storedFormData) {
      // Parse the JSON string back into an object
      const parsedFormData = JSON.parse(storedFormData);

      // Set the retrieved form data to the formik initial values
      formik.setValues(parsedFormData);
    }
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Update Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.firstName}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.lastName}</div>
          )}

        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            {...formik.getFieldProps('phoneNumber')}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.phoneNumber}</div>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

ProfileUpdatePage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default ProfileUpdatePage;
