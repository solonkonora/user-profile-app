import './details.css';
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  // retrieve form data from localStorage
  const formData = JSON.parse(localStorage.getItem("formData"));
  const userImage = localStorage.getItem("userImage");

  const navigate = useNavigate();

  const handleUpdateData = (event) => {
    event.preventDefault();
    navigate("/profile-update");
  }

  return (
    <div className="container">
      <h1 className="heading">Registration Details</h1>
      {formData ? (
        <div className="details-container">
          {userImage && ( 
            <div className="image-container">
              <img src={userImage} alt="user image" className="user-image" />
            </div>
          )}

          <div className="text-container">
            <p>
              <strong>First Name:</strong> {formData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {formData.phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <p className="no-data-message">No registration data available.</p>
      )}
      <button className="button1" onClick={handleUpdateData}>Update Data</button>
    </div>
  );
}

export default DetailsPage;