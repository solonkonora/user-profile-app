import './details.css';
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/ProfileContext";

function DetailsPage() {
  const { profile, userImage } = useProfile();
  const navigate = useNavigate();

  const handleUpdateData = (event) => {
    event.preventDefault();
    navigate("/profile-update");
  };

  const hasData = profile && (profile.firstName || profile.lastName || profile.email || profile.phoneNumber);

  return (
    <div className="container">
      <h1 className="heading">Registration Details</h1>
      {hasData ? (
        <div className="details-container">
          {userImage && (
            <div className="image-container">
              <img src={userImage} alt="user image" className="user-image" />
            </div>
          )}

          <div className="text-container">
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {profile.phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <p className="no-data-message">No registration data available.</p>
      )}
      <button className="button1" onClick={handleUpdateData}>
        Update Data
      </button>
    </div>
  );
}

export default DetailsPage;