
import { Box, Card, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import './Sobre.css'
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

function Sobre() {
    useEffect(() => {
        window.scrollTo(0,0)
    
      }, [])

    return (
        <>
                <Navbar />
                <img className='imgSobre' src="https://i.imgur.com/6Bbq1mz.png" alt="Imagem Inicial" />
                <h2 className='tituloSobre'>Sobre nós</h2>
                <h3 className='textoSobre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, curabitur cursus cursus fermentum quis. Amet semper mi dignissim vitae tristique posuere quis volutpat. Pellentesque netus diam in morbi. Dolor nunc libero tortor, et sit arcu platea faucibus. Eget vitae vestibulum sed dignissim phasellus sed. Diam velit ac ornare proin euismod in. Vitae at etiam egestas pharetra accumsan id nunc. Velit lectus netus sit ornare vitae tellus sit. Orci volutpat ultricies volutpat diam pellentesque eu adipiscing eget augue.</h3>
                <h2 className='tituloSobre'>Um novo conceito de galeria</h2>
                <h3 className='textoSobre'>Libero tortor, et sit arcu platea faucibus. Eget vitae vestibulum sed dignissim phasellus sed. Diam velit ac ornare proin euismod in.</h3>
                <h2 className='tituloSobre'>Our Dev Team</h2>
                <Box className='displaySobre'>
                        <Card className='cardbackgroundSobre displaycardSobre'>
                            <img className='cardmediaSobre' src="" alt="" />
                            <div className='displaytextSobre fontSobre'>
                                <Typography  >
                                    <h1></h1>
                                </Typography>
                                <Typography  >
                                    <p>Giulia Galbiati</p>
                                </Typography>
                                <Typography  >
                                    <p>sobre</p>
                                </Typography>

                            </div>

                        </Card>
                        <Card className='cardbackgroundSobre displaycardSobre'>
                            <img className='cardmediaSobre' src="https://i.imgur.com/mNrGs0l.jpg" alt="" />
                            <div className='displaytextSobre fontSobre'>
                                <Typography  >
                                    <h1></h1>
                                </Typography>
                                <Typography  >
                                    <p>Guilherme Rivas</p>
                                </Typography>
                                <Typography  >
                                    <p>sobre</p>
                                </Typography>

                            </div>

                        </Card>
                        <Card className='cardbackgroundSobre displaycardSobre'>
                            <img className='cardmediaSobre' src="https://imgur.com/tS5reAO.png" alt="" />
                            <div className='displaytextSobre fontSobre'>
                                <Typography  >
                                    <h1></h1>
                                </Typography>
                                <Typography  >
                                    <p>Pedro Jones</p>
                                </Typography>
                                <Typography  >
                                    <p>sobre</p>
                                </Typography>

                            </div>

                        </Card>
                        <Card className='cardbackgroundSobre displaycardSobre'>
                            <img className='cardmediaSobre' src="" alt="" />
                            <div className='displaytextSobre fontSobre'>
                                <Typography  >
                                    <h1></h1>
                                </Typography>
                                <Typography  >
                                    <p>Victor França</p>
                                </Typography>
                                <Typography  >
                                    <p>sobre</p>
                                </Typography>

                            </div>

                        </Card>

                    </Box>
        
     
        </>
    )
}

export default Sobre;




