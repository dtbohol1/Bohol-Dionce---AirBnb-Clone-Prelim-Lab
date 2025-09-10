import React from "react";
import CategorySection from "../components/CategorySection";
import { beachListings, cabinListings } from "../data/listings";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Airbnb Clone</h1>

      <CategorySection title="Beachfront Homes" listings={beachListings} />
      <CategorySection title="Mountain Cabins" listings={cabinListings} />
      {/* Add 2 more category sections with data */}
    </div>
  );
};

export default Home;
