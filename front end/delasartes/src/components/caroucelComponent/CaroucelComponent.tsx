import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

function CaroucelComponent() {
    const [itens, setItens] = useState([
        {
            img: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/02gambarini_779-24.jpg?w=1900&h=1269",
            titulo: "Titulo 1",
        },
        {
            img: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/02gambarini_779-24.jpg?w=1900&h=1269",
            titulo: "Titulo 1",

        },
        {
            img: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/02gambarini_779-24.jpg?w=1900&h=1269",
            titulo: "Titulo 1",
        },
    ])
    return (
        <div>
            <Carousel>
                {
                    itens.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-class"
                                src={item.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.titulo}</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))
                }


            </Carousel>
        </div>
    )
}

export default CaroucelComponent
