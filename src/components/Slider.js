import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
const Slider = ({start}) => {
  return(
    <Carousel fade>
    {start.map((item,index)=>(

        <Carousel.Item key = {item}>
            <img src= {item} className='d-block w-100' alt={`${index} slide`}/>
        </Carousel.Item>
    ))}
        {/* <Carousel.Caption>
            <h1>First Slide Label</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia amet nesciunt?</p>
        </Carousel.Caption> */}
    </Carousel>
  );
};

export default Slider;
