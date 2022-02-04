import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Typography, Box, Grid } from '@material-ui/core';
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>

            <Grid xs={12}>
                <div className='borderfooter'></div>
                <Grid container xs={12}>
                    <Grid xs={4}>
                        <Box mt={10}>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='colorlogo'>delasArtes</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon className='redes' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes' />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box className='displayfooter'>
                            <Box mt={10} className='text'>
                                <Typography variant="h5" align="center" gutterBottom className='text'>SAQ</Typography>
                            </Box>
                            <Box className='textfooter'>
                                <a text-decoration='none' href="" target="_blank">
                                    <h6>Política de Reembolso</h6>

                                </a>
                                <a href="" target="_blank">
                                    <h6>Política de Trocas</h6>
                                </a>
                                <a href="" target="_blank">
                                    <h6>Política de Privacidade</h6>
                                </a>
                                <a href="" target="_blank">
                                    <h6>Política de Entrega</h6>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box className='displayfooter'>
                            <Box mt={10} className='text'>
                                <Typography variant="h5" align="center" gutterBottom className='text'>CONTATO</Typography>
                            </Box>
                            <Box className='textfooter'>
                            <Link to='/contato' className="text-decoration-none">
                                    <h6>Fale Conosco</h6>
                                </Link>
                                <a href="" target="_blank">
                                    <h6>Seja um Franqueado</h6>
                                </a>
                                <a href="" target="_blank">
                                    <h6>Vendas Corporativas</h6>
                                </a>
                                <a href="" target="_blank">
                                    <h6>Termos de Serviço</h6>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid xs={6}>
                        <Box mt={10} className='textfooter startfooter'>
                            <img
                                className="payimg"
                                src="https://imgur.com/JchT4dL.png"
                                alt="paypal"
                            />
                            <img
                                className="payimg"
                                src="https://imgur.com/bQHNCPo.png"
                                alt="visa"
                            />
                            <img
                                className="payimg"
                                src="https://imgur.com/rBApRwc.png"
                                alt="american express"
                            />
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box mt={12} className='textfooter endfooter'>
                            <p>© 2022, delasArtes. CNPJ 24.518.1319.0001-38.</p>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;