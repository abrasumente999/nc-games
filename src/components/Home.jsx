import { Header } from "./Header";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="Home">
      <header className="Home--header">
        <Header header={"NC Games"} />
        <h2>Board game reviews. Played and written by you.</h2>
      </header>

      <main className="Home--login">
        <Link className="Home--loginLink" to="/users">
          Click here to log in
        </Link>
      </main>
    </div>
  );
};
