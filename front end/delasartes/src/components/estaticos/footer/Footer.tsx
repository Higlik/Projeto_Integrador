import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './footer.css'


function Footer() {
    return (
        <>
            <Grid className='box1' container direction="row" justifyContent="center" alignItems="center">
                <Grid container alignItems="center" item xs={4}>
                    <Box>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='colorlogo'>delasArtes</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;