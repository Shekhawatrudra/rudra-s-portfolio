// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Rudra Shekhawat | All Rights Reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
};

export default Footer;
