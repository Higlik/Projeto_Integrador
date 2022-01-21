import React from 'react';
<<<<<<< HEAD
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './footer.css'
=======
import './footer.css';
const Footer = () => {
  return <div>
    Footer
  </div>;
};
>>>>>>> Pedro

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='text'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                        </Box>
                    
                    
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='text' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                                <Typography variant="subtitle2" gutterBottom className='text' align="center">DelasArtes</Typography>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;