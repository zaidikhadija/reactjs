import React from 'react';
import {Carousel} from "react-bootstrap";


const ComponentTwo = () =>{
    return(
    
      <>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="/homme11.jpg"
      alt="homme11"
    />
    <Carousel.Caption>
      <h3>Mode Homme</h3>
      <p>denière tendance des vtements</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="women.jpg"
      alt="women"
    />

    <Carousel.Caption>
      <h3>Mode Femme</h3>
      <p>denière tendance des vtements</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="bébé1.jpg"
      alt="bébé1"
    />

    <Carousel.Caption>
      <h3>Mode enfant</h3>
      <p>denière tendance des vtements</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    )
}
    export default ComponentTwo;