import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css"; // Import the CSS module file

//components
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={`container mt-4 ${styles.containerBorder}`}>
        <h1 className="mb-4">Welcome to the Home Page</h1>
        <div className="row">
          {users.map((user) => (
            <div key={uuidv4()} className={`col-md-12 mb-3 ${styles.card}`}>
              <div className={`d-flex align-items-center ${styles.cardInner}`}>
                {/* Image on the left */}
                <div className={`mr-3 ${styles.profileImageContainer}`}>
                  <img
                    src={`data:image/jpeg;base64,${user.profileImage}`}
                    className={styles.profileImg}
                    alt="Profile"
                  />
                </div>
                {/* Content on the right */}
                <div>
                  <h5>{user.name}</h5>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
