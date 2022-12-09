import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";

export const Nav = () => {
  const { loggedInUser } = useContext(UserContext);

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
      {loggedInUser ? (
        <Link to={`/users/${loggedInUser.username}`} className="Nav--link">
          {loggedInUser.username}
        </Link>
      ) : (
        <Link to={"/users"} className="Nav--link">
          Login
        </Link>
      )}
    </nav>
  );
};
