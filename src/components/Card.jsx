import React from "react";

const Card = ({ image, title, location, price, rating }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.info}>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{price}</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    width: "220px",
    margin: "10px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
  },
  info: {
    padding: "10px",
  },
};

export default Card;
