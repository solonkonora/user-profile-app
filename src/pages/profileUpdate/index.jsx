import { useState } from 'react';
import './update.css';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useProfile } from '../../context/ProfileContext';

const ProfileUpdatePage = () => {
  const navigate = useNavigate();
  const { profile, setProfile, userImage, setUserImage } = useProfile();
  const defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
  const [preview, setPreview] = useState(userImage || defaultImage);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^6\d{8}$/, 'Phone number must start with 6 and be 9 digits')
      .required('Phone Number is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: profile?.firstName || '',
      lastName: profile?.lastName || '',
      email: profile?.email || '',
      phoneNumber: profile?.phoneNumber || '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      setProfile(values);
      navigate('/details');
    },
  });

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setUserImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1 className="heading">Update Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="formGroup">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" {...formik.getFieldProps('firstName')} />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.firstName}</div>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.lastName}</div>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" {...formik.getFieldProps('phoneNumber')} />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <img
            src={preview}
            height="100px"
            width="100px"
            alt="upload"
            style={{ alignSelf: 'center', borderRadius: '50%' }}
          />
          <input type="file" id="profilePicture" onChange={handleProfilePictureChange} />
        </div>
        <button type="submit" className="button">
          Update Profile
        </button>
      </form>

      <div className='one'>
        <Link to="/details" className="nav-link">
          Back to Details
        </Link>
        <Link to="/" className="nav-link">
          Back to Registration
        </Link>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;