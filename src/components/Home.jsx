import { Header } from "./Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
export const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="Home">
      <header className="Home--header">
        <Header header={"NC Games"} />
        <h2>Board game reviews. Played and written by you.</h2>
      </header>

      <main className="Home--login">
        {loggedInUser ? (
          <h3>Welcome, {loggedInUser.username} </h3>
        ) : (
          <Link className="Home--loginLink" to="/users">
            Click here to log in
          </Link>
        )}
      </main>
    </div>
  );
};
