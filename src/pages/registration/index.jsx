//eslint-disable-next-line no-unused-vars
import React from "react";
import "./registration.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

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
        .matches(/^[6][7][5-9]\d{6}$/, "Invalid phone number")
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

      navigate("details");
    },
  });

  const handleFileUpload = () => {
    const fileInput = document.querySelector("#myfile");
    const previewImage = document.querySelector("#previewImage");

    fileInput.addEventListener("input", (e) => {
      const file = e.target.files[0];
      const image_url = URL.createObjectURL(file);
      previewImage.src = image_url;
    });
  };

  const handleEvent = () => {
    // Access the file input element
    const fileInput = document.querySelector("#myfile");

    // Check if a file has been selected
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];

      // Perform any desired operations with the selected file
      console.log("Selected File:", selectedFile);

      // Reset the file input value
      fileInput.value = null;
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <>
      <input type="file" id="myfile" />
      <img
        id="previewImage"
        src="https://media.istockphoto.com/id/501338715/photo/businesswoman-icon.jpg?s=612x612&w=0&k=20&c=t5vKOMCf_Kp8UKhQ_D6hLHDva0_MkLz03yZ6-9xqB2g="
        alt="Preview"
        onClick={handleEvent}
        style={{
          maxWidth: "150px",
          maxHeight: "150px",
          margin: "auto",
          alignSelf: "center",
          justifyContent: "center",
        }}
      />
      <br />
      <button onClick={handleFileUpload} id="uploadButton">
        Upload
      </button>
      <br />

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
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
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
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
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
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
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
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div style={{ color: "red", marginTop: "0.5rem" }}>
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>

        <button type="submit" className="button1">
          Create Profile
        </button>
      </form>
    </>
  );
}

export default RegistrationForm;

// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import FormikValidation from "../../components/nav-bar/formik-validation";
// import "./registration.module.css";
// import { useNavigate } from "react-router-dom";

// function RegistrationForm() {
//   const navigate = useNavigate();

// {/* <FormikValidation onSubmit={formik.handleSubmit}/> */}

// const handleSubmit = (values) => {
//   //handle form submission
//   console.log(values);

//     // Store the form data in localStorage
//     const formData = {
//       firstName: values.firstName,
//       lastName: values.lastName,
//       email: values.email,
//       phoneNumber: values.phoneNumber,
//     };
//     localStorage.setItem("formData", JSON.stringify(formData));

//     // Reset the form fields
//     formik.resetForm();

//     navigate("details");
//   };

//   return (
//     <>
//       <h1 className="heading">Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.firstName}
//           />
//           {formik.touched.firstName && formik.errors.firstName && (
//             <div style={{ color: "red" }}>{formik.errors.firstName}</div>
//           )}
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.lastName}
//           />
//           {formik.touched.lastName && formik.errors.lastName && (
//             <div style={{ color: "red" }}>{formik.errors.lastName}</div>
//           )}
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div style={{ color: "red" }}>{formik.errors.email}</div>
//           )}
//         </div>

//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.phoneNumber}
//           />
//           {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//             <div style={{ color: "red", marginTop: "0.5rem" }}>
//               {formik.errors.phoneNumber}
//             </div>
//           )}
//         </div>

//         <button type="submit" className="button1">
//           Create Profile
//         </button>
//       </form>
//     </>
//   );
// }

// export default RegistrationForm;
