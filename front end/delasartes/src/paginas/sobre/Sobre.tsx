
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
        window.scrollTo(0, 0)

    }, [])

    return (
        <>
            <Navbar />
            <img className='imgSobre' src="https://imgur.com/DN4SB18.png" alt="Imagem Inicial" />
            <h2 className='tituloSobre'>Sobre nós</h2>
            <h3 className='textoSobre'>Somos uma instituição com intuito de auxiliar mulheres artistas, inclusas nas classes baixas da sociedade, a promover seu trabalho no nosso Marketplace, enaltecendo a igualdade de gênero com lucros justos e oportunidades de crescimento no ramo artístico.
                Todas as artistas podem utilizar a plataforma para divulgar suas obras e qualquer pessoa pode adquiri-las.</h3>
            <h2 className='tituloSobre'>Um novo conceito de galeria</h2>
            <h3 className='textoSobre'>A galeria possue filtragem por suas categorias e nossas artistas, também podendo ser utilizado nossa plataforma de feed de noticias, onde pode receber conteudos postados pelas artistas sobre futuras obras e desenvolvimento delas.</h3>
            <h2 className='tituloSobre'>Our Dev Team</h2>
            <Box className='displaySobre'>
                <Card className='cardbackgroundSobre displaycardSobre'>
                    <img className='cardmediaSobre' src="" alt="" />
                    <div className='displaytextSobre devteamtext pgrightp'>
                        <div>
                            <h1>Giulia Galbiati</h1>
                            <p>Dev Full Stack</p>
                            <h2>sobre</h2>
                        </div>
                        <div className='iconessobre'>
                            <a href="https://www.linkedin.com/in/giulia-galbiati-544bab1b1/" target='_blank'><img src="https://imgur.com/Ky865S6.png" alt="" /></a>
                            <a href="https://github.com/giugalbiati" target='_blank'><img src="https://imgur.com/9hssxc3.png" alt="" /></a>
                        </div>
                    </div>
                </Card>
                <Card className='cardbackgroundSobre displaycardSobre'>
                    <img className='cardmediaSobre' src="https://i.imgur.com/HjVEvo7.jpg" alt="" />
                    <div className='displaytextSobre devteamtext pgrightp'>
                        <div>
                            <h1>Guilherme Rivas</h1>
                            <p>Dev Full Stack</p>
                            <h2>Desenvolvedor FullStack Jr com grande curiosidade em tudo que envolve tecnologia, com maior interesse em Análise de Dados e Big Data, disposto a aprender e encarar novos desafios.</h2>
                        </div>
                        <div className='iconessobre'>
                            <a href="https://www.linkedin.com/in/guilherme-rivas/" target='_blank'><img src="https://imgur.com/Ky865S6.png" alt="" /></a>
                            <a href="https://github.com/GuilhermeRivas" target='_blank'><img src="https://imgur.com/9hssxc3.png" alt="" /></a>
                        </div>

                    </div>

                </Card>
                <Card className='cardbackgroundSobre displaycardSobre'>
                    <img className='cardmediaSobre' src="https://imgur.com/tS5reAO.png" alt="" />
                    <div className='displaytextSobre devteamtext pgrightp'>
                        <div>
                            <h1>Pedro Jones</h1>
                            <p>Dev Full Stack</p>
                            <h2></h2>
                        </div>
                        <div className='iconessobre'>
                            <a href="https://www.linkedin.com/in/pedro-jones-b7b7351a4/" target='_blank'><img src="https://imgur.com/Ky865S6.png" alt="" /></a>
                            <a href="https://github.com/PedroJones" target='_blank'><img src="https://imgur.com/9hssxc3.png" alt="" /></a>
                        </div>

                    </div>

                </Card>
                <Card className='cardbackgroundSobre displaycardSobre'>
                    <img className='cardmediaSobre' src="https://i.imgur.com/1raX63n.jpg" alt="" />
                    <div className='displaytextSobre devteamtext pgrightp'>
                        <div>
                            <h1>Victor França</h1>
                            <p>Dev Full Stack</p>
                            <h2>sobre</h2>
                        </div>
                        <div className='iconessobre'>
                            <a href="https://www.linkedin.com/in/victor-fran%C3%A7a-5833b5224/" target='_blank'><img src="https://imgur.com/Ky865S6.png" alt="" /></a>
                            <a href="https://github.com/Higlik" target='_blank'><img src="https://imgur.com/9hssxc3.png" alt="" /></a>
                        </div>
                    </div>

                </Card>

            </Box>


        </>
    )
}

export default Sobre;




