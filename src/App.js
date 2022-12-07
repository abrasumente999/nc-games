import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Route, Routes, useParams, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Reviews } from "./components/Reviews";
import { SingleReview } from "./components/SingleReview";
import { Comments } from "./components/Comments";
import { ReviewProvider } from "./components/contexts/Review";

function App() {
  return (
    <ReviewProvider>
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
          </Routes>
        </main>
      </div>
    </ReviewProvider>
  );
}

export default App;
