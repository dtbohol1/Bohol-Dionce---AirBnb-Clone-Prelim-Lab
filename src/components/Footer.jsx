import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Airbnb Clone. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    borderTop: "1px solid #ddd",
    textAlign: "center",
    color: "#777",
  },
};

export default Footer;
