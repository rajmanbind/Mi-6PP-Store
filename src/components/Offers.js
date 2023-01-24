import React from "react";
import "../styles/Offers.css";
import Offer from "./Offer";
const offers = ({ offer }) => {
  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          src={item.image}
          link={item.url}
        ></Offer>
      ))}
    </div>
  );
};

export default offers;
