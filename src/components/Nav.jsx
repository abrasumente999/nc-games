import { Link } from "react-router-dom";
export const Nav = () => {
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
