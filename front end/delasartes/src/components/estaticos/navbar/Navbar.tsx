import React from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Toolbar, alpha, Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <>
            <div>
                <div  className="displayNavBarLogo backgroundNavBar">
                   
                   <Link to='./home' className="text-decoration-none">
                    <Box className="logoDA"  >
                        <Typography variant="h5">
                            delasArtes
                        </Typography>
                     </Box>
                    </Link>


                    <Link to='/produtos' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" color="inherit" className="LgLoginNavBar">
                                   Produtos
                                </Typography>
                            </Box>
                        </Link>


                    <Box className="displayNavbar">
                    <Link to='./categorias' className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit" className="FontNavbar">
                                categorias
                            </Typography>
                        </Box>
                    </Link>

                        <Link to='./artistas' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    artistas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='./sobre' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    sobre
                                </Typography>
                            </Box>
                        </Link>


                        <Link to='' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Link to='/usuario' className="text-decocartor-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="FontNavbar">
                                    Meu Perfil
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" color="inherit" className="LgLoginNavBar">
                                    Login
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