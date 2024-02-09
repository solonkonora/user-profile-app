// import { useFormik } from "formik";
// import * as Yup from "yup";

// function FormikValidation({ onSubmit }) {
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
//       email: Yup.string().email("Invalid email address").required("Email is required"),
//       phoneNumber: Yup.string()
//         .matches(/^[6][7][5-9]\d{6}$/, "Invalid phone number")
//         .required("Phone Number is required"),
//     }),
//     onSubmit: onSubmit,
//   });

//   // Rest of your code...

// }

// export default FormikValidation;