import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Virco Movies 🎬</h1>
          <p>Discover the latest blockbusters, hidden gems, and fan favorites.</p>
          <Link to="/movie" className="cta-button">Explore Movies</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
