import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useHistory, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, alpha, Box, createStyles, makeStyles, Theme, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './navbar.css';
import ModalProduto from "../../produtos/modalProduto/ModalProduto";


function Navbar() {


    return (
        <>
            
            <div className="displayNavBar backgroundNavBar">

                <Link to='/home' className="text-decoration-none">
                    <Box  >
                        <Typography variant="h5">
                           <a href="/home"> <h1 className="logoDA" >delasArtes</h1>  </a> 
                        </Typography>
                    </Box>
                </Link>

                <Box className="fontnavbar displayitens">

                    <Link to='/produtos' className='text-decorator-none'>
                        <Box mx={1} className="cursor" >
                            <Typography variant="h6" className="LgLoginNavBar">
                                <Box className="displayarrow">
                                <p>Obras</p>
                               {/*<KeyboardArrowDownIcon className="mgarrow" />*/} 
                                </Box>
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/categorias' className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="FontNavbar">
                            <Box className="displayarrow">
                                <p>Categorias</p>
                               {/*<KeyboardArrowDownIcon className="mgarrow" />*/} 
                                </Box>
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/sobre' className="text-decocartor-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" className="FontNavbar">
                                <p>Sobre</p>
                            </Typography>
                        </Box>
                    </Link>
                    </Box>
                    
                    <Box className="displayicones">
                            <Box mx={1} className="cursor" >
                                <Typography variant="h6" className="LgLoginNavBar">
                                   <ModalProduto/>
                                </Typography>
                            </Box>
                   
                        <Link to='/login'  className='text-decorator-none'>
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