import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/teams">
                  Teams
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/club">
                  Clubs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>TREMENDOUS TEAMS TRACK</h1>
    </div>
  );
};

export default Header;