import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";

export const Nav = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <nav className="Nav">
      <Link to="/" className="Nav--link">
        Home
      </Link>
      <Link to="/reviews" className="Nav--link">
        Reviews
      </Link>
      <Link to="/users" className="Nav--link">
        Users
      </Link>
    </nav>
  );
};
