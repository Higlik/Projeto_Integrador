import React from "react";
import { AppBar, Toolbar, alpha, Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div>
                <div  className="displayNavBarLogo backgroundNavBar">
                   
                   <Link to='./home' className="text-decoration-none">
                    <Box className="logoDA"  >
                        <Typography variant="h5" color="inherit" >
                            Delas Artes
                        </Typography>
                     </Box>
                    </Link>

                    <Box className="displayNavbar">
                    <Link to='./sobre' className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit" className="FontNavbar">
                                Sobre
                            </Typography>
                        </Box>
                    </Link>

                        <Link to='./contato' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='./produtos' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>


                        <Link to='/categorias' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    Categorias
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" color="inherit" className="LgLoginNavBar">
                                </Typography>
                            </Box>
                        </Link>


                    </Box>

                </div>
            </div>
        </>
    )
}




export default Navbar;