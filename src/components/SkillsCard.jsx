// src/components/SkillsCard.jsx
import React from "react";

function SkillsCard({ skill, level, icon }) {
  return (
    <div style={styles.card}>
      <h3>{skill}</h3>
      <p>{level}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    marginBottom: "2rem",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default SkillsCard;
