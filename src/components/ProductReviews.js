import React from "react";
import "../styles/ProductReviews.css";
import ProductReviewsCard from "./ProductReviewsCard";
const ProductReviews = ({productReviews}) => {
  return(
    <div className="ProductReviews">
        {productReviews.map((item,index)=>(
            <ProductReviewsCard  key = {item.image} image = {item.image} price  = {item.price} review = {item.review} name = {item.name}/>
        ))}
    </div>
  );
};

export default ProductReviews;
