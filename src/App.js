import "./App.css";
import { useContext } from "react";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Reviews } from "./components/Reviews";
import { SingleReview } from "./components/SingleReview";
import { Comments } from "./components/Comments";
import { Users } from "./components/Users";
import { LoadingContext } from "./components/contexts/Loading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/reviews/:review_id/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
