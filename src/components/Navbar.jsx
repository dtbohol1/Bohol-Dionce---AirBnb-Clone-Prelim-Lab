import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={{ color: "#FF385C", textDecoration: "none" }}>
          Airbnb
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/listings" style={styles.link}>
          Listings
        </Link>
        <Link to="/experiences" style={styles.link}>
          Experiences
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
};

export default Navbar;
