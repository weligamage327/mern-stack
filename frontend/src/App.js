import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/userprofile";
import Registration from "./pages/registration";
import TripPlanning from "./pages/tripplanning";
import BookingCheckout from "./pages/bookingcheckout";
import ReviewsRatings from "./pages/reviewsratings";
import AddUser from "./pages/adduser";
// import AdminDashboard from "./pages/admindashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/trip-planning" element={<TripPlanning />} />
        <Route path="/booking-checkout" element={<BookingCheckout />} />
        <Route path="/reviews-ratings" element={<ReviewsRatings />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
