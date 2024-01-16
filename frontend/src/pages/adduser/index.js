import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("profileImage", profileImage); // Append the file object directly

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to FormData
          },
        }
      );

      // Handle the response or reset form fields here
      console.log("New user added:", response.data);
      setName("");
      setEmail("");
      setAddress("");
      // Reset the file input field if needed (example: profileImage(null))
    } catch (error) {
      console.error("Error adding new user:", error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Add New User</h2>
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                className="form-control"
                id="profileImage"
                onChange={(e) => setProfileImage(e.target.files[0])}
                accept="image/*"
                multiple
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddUser;
