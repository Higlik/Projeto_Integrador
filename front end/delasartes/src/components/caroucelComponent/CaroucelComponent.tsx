import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import { Box } from "@material-ui/core"
import './CaroucelComponent.css'

function CarouselComponent() {
  const [items, setstate] = useState([])
  return (
<Box className='pgcarousel'>
<Carousel >
  <Carousel.Item interval={3000}>
    <img
      className="imgcarousel1"
      src="https://imgur.com/R1kPPuc.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel2"
      src="https://imgur.com/7Z3jzqu.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/TL1SMxr.png"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/TZFCLRd.png"
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/fnibwVl.png"
      alt="Fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/zCQUyOF.png"
      alt="Sixth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/akutqzb.png"
      alt="Seventh slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/F5O08Tj.png"
      alt="Eighth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/AQik5vB.png"
      alt="Ninth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/08xTGJU.png"
      alt="Tenth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/eQ1Tc2p.png"
      alt="Eleventh slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/64uEMPt.png"
      alt="Twelfth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/dHLWfQf.png"
      alt="Thirteenth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/HV3oqMM.png"
      alt="Fourteenth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="imgcarousel3"
      src="https://imgur.com/mcPJzki.png"
      alt="Fifteenth slide"
    />
  </Carousel.Item>
</Carousel>


</Box>


  )
}

export default CarouselComponent