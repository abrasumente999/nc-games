import "./App.css";
import { getReviews } from "./api";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header header="NC Games" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
