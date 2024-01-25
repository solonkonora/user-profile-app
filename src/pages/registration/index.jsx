// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import styles from './registration.module.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const RegistrationPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store the form data in localStorage
//     const formData = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber
//     };

//     localStorage.setItem('formData', JSON.stringify(formData));

//     // Reset the form fields
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPhoneNumber('');
//   };

//   return (
//     <div>
//       <h1 className={styles.heading}>Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Create Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import "./registration.module.css";
import * as Yup from "yup";
// import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  // const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[6-9]\d{8}$/, "Invalid phone number")
        .required("Phone Number is required"),
    }),

    onSubmit: (values) => {
      // Handle form submission
      console.log(values);

      // Store the form data in localStorage
      const formData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };

      localStorage.setItem("formData", JSON.stringify(formData));

      // Reset the form fields
      formik.resetForm();

      // Redirect to the details page
      // history.push('/details');
    },
  });

  return (
    <>
      <h1 className="heading">Registration</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName} />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName} />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber} />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div>{formik.errors.phoneNumber}</div>
          )}
        </div>

        <button type="submit" className="button1">
          Create Profile
        </button>
      </form>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
// export { useHistory }
export default RegistrationForm;