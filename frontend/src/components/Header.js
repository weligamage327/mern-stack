import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            My Travel App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user-profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trip-planning">
                  Trip Planning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking-checkout">
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reviews-ratings">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-user">
                  Add User
                </a>
              </li>
              {/* Admin Dashboard link removed */}
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
