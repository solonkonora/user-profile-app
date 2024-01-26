import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const excluded_routes = ["/details", "/profile-update"];

    const location = useLocation();

    if (excluded_routes.includes(location.pathname)) return null;

    return (
        <nav>
          <ul>
            <li>
              {/* using '/' to now make the registration page to take the space ie acting like the index page */}
              <Link to="/">Registration</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/profile-update">Profile Update</Link>
            </li>
          </ul>
        </nav>
    )
}