import React from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, alpha, Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>

            <div className="displayNavBar backgroundNavBar">

                <Link to='./home' className="text-decoration-none">
                    <Box  >
                        <Typography variant="h5">
                            <h1 className="logoDA" >delasArtes</h1>
                        </Typography>
                    </Box>
                </Link>

                <Box className="font displayitens">
                    <Link to='./sobre' className="text-decocartor-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="FontNavbar">
                                <p >Sobre</p>
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/usuario' className="text-decocartor-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="FontNavbar">
                                <p>Contato</p>
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/produto' className='text-decorator-none'>
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="LgLoginNavBar">
                                <Box className="displayitens">
                                <p>Produtos</p>
                                <KeyboardArrowDownIcon />
                                </Box>
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='./categorias' className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="FontNavbar">
                            <Box className="displayitens">
                                <p>Categorias</p>
                                <KeyboardArrowDownIcon />
                                </Box>
                            </Typography>
                        </Box>
                    </Link>
                    </Box>
                    
                    <Box className="displayicones">
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="LgLoginNavBar">
                                    <AddBoxIcon className="tamanhoicones"/>
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="LgLoginNavBar">
                                    <SearchIcon className="tamanhoicones" />
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="LgLoginNavBar">
                                   <LocalMallIcon className="tamanhoicones" />
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="LgLoginNavBar">
                                    <PersonIcon className="tamanhoicones" />
                                </Typography>
                            </Box>
                        </Link>
                    </Box>



               
            </div>
        </>
    )
}




export default Navbar;