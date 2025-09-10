import React from "react";
import CategorySection from "../components/CategorySection";
import { beachListings, cabinListings } from "../data/listings";

const Listings = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Listings</h1>
      <CategorySection title="Beachfront Homes" listings={beachListings} />
      <CategorySection title="Mountain Cabins" listings={cabinListings} />
      {/* Add more categories */}
    </div>
  );
};

export default Listings;
