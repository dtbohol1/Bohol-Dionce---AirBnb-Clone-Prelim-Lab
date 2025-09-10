import React from "react";
import Card from "./Card";

const CategorySection = ({ title, listings }) => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>{title}</h2>
      <div style={styles.cardsContainer}>
        {listings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default CategorySection;
