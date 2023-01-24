import React from "react";
import "../styles/ProductReviewsCard.css";
const ProductReviewsCard = ({image,price,review,name}) => {
  return (
    <div className="ProductReviewsCard">
      <img src={image} alt="" />
      <h5>{name}</h5>
      <span>{review}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewsCard;
