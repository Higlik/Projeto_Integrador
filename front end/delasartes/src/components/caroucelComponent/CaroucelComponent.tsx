import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import Produtos from '../../models/Produtos'
import {Button,Box } from "@material-ui/core"
import './CaroucelComponent.css'

function CarouselComponent() {
  const [items, setstate] = useState([])
  return (
<Box className='pgcarousel'>
<Carousel >
  <Carousel.Item interval={2000}>
    <img
      className="imgcarousel1"
      src="https://imgur.com/R1kPPuc.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="imgcarousel2"
      src="https://imgur.com/JpNkS1W.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item className='pgcarousel'>
    <img
      className="imgcarousel3"
      src="https://imgur.com/HnnPsH5.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>


</Box>


  )
}

export default CarouselComponent