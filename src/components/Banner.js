import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Banner = ({ end }) => {
  return (
    <div className="Banner">
      <Carousel fade>
        {end.map((item, index) => (
          <Carousel.Item
            key={item.image}
            id="banner"
            interval={1000}
            keyboard={true}
          >
            <img
              src={item.image}
              className="d-block w-100"
              alt={`${index} banner`}
            />
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <b>Read More...</b>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
