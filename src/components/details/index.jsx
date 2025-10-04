import PropTypes from 'prop-types';
import './details.css';

const ProfileDetailsPage = ({ profile }) => {
  return (
    <div className="container">
      <h3 className="title">Profile Details</h3>
      <div className="profileInfo">
        <p className="field">First Name: {profile.firstName}</p>
        <p className="field">Last Name: {profile.lastName}</p>
        <p className="field">Email: {profile.email}</p>
        <p className="field">Phone Number: {profile.phoneNumber}</p>
      </div>
    </div>
  );
};

ProfileDetailsPage.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
};

export default ProfileDetailsPage;