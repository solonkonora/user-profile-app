//eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import "./registration.module.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";



// // eslint-disable-next-line no-unused-vars
// function ImageBlob() {
//   const [imgs, setImgs] = useState();

//   const handleChange=(e) => {
//     console.log(e.target.files);
//     const data = new FileReader();
//     data.addEventListener("load", () => {
//       setImgs(data.result);
//     });
//     data.readAsDataURL(e.target.files[0]);
//   }
//   console.log(imgs);

//   return (
//     <>
//       <input type="file" onChange={handleChange} />
//       <div style={{ display: "flex", justifyContent: "center", borderRadius: "50%", width: "25%", height: "25%", justifySelf: "center", margin: "0 auto", backgroundColor: "skyblue" }}>
//         <img
//           src={imgs}
//           height="100px"
//           width="100px"
//           alt="uploaded img"
//           style={{ alignSelf: "center", borderRadius: "50%" }}
//         />
//       </div>
//       <br />
//     </>
//   );
// }

// function RegistrationForm() {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required("First Name is required"),
//       lastName: Yup.string().required("Last Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       phoneNumber: Yup.string()
//         .matches(/^[6][7][5-9]\d{6}$/, "Invalid phone number")
//         .required("Phone Number is required"),
//     }),
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log(values);

//       // Store the form data in localStorage
//       const formData = {
//         firstName: values.firstName,
//         lastName: values.lastName,
//         email: values.email,
//         phoneNumber: values.phoneNumber,
//       };
//       localStorage.setItem("formData", JSON.stringify(formData));

//       // Reset the form fields
//       formik.resetForm();

//       navigate("details");
//     },
//   });

//   return(
//     <>
//       <h1 className="heading">Registration</h1>
//       <form onSubmit={formik.handleSubmit}>

//       <ImageBlob />

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
//             <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.firstName}</div>
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
//             <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.lastName}</div>
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
//             <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</div>
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
//             <div style={{ color: "red", fontSize: "12px", marginTop: "0.5rem" }}>
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

// // export function ImageBlob() {}
// export default RegistrationForm;



// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./registration.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function ImageBlob() {
  const [imgs, setImgs] = useState();
  const [imageData, setImageData] = useState(""); // Add state for storing image data

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgs(reader.result);
      setImageData(reader.result); // Store the image data in state
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          width: "25%",
          height: "25%",
          justifySelf: "center",
          margin: "0 auto",
          backgroundColor: "skyblue",
        }}
      >
        <img
          src={imgs}
          height="100px"
          width="100px"
          alt="upload"
          style={{ alignSelf: "center", borderRadius: "50%" }}
        />
      </div>
      <br />
      {/* Store the image data in local storage */}
      {imageData && (
        <button
          onClick={() => {
            localStorage.setItem("userImage", imageData);
            alert("Image stored in local storage!");
          }}
        >
          Save Image
        </button>
      )}
    </>
  );
}

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

  return(
    <>
      <h1 className="heading">Registration</h1>
      <form onSubmit={formik.handleSubmit}>

      <ImageBlob />

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
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.firstName}</div>
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
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.lastName}</div>
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
            <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.email}</div>
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
            <div style={{ color: "red", fontSize: "12px", marginTop: "0.5rem" }}>
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

// export function ImageBlob() {}
export default RegistrationForm;