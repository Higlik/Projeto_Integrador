import React from "react";
import Login from "../login/Login";
import CadastroUsuario from "../cadastroUsuario/CadastroUsuario";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import Navbar from "../../components/estaticos/navbar/Navbar";
import './PaginaLogin.css';


function PaginaLogin() {
    return (

        <>
            <Grid xs={12}>
            <Box className="PgTopLogin">
                <h1 className='fontTitulo mg_titulo'>LOGIN</h1>
                <div className='border'></div>
            </Box>

                <Grid container xs={12}   >
                    <Grid xs={6}>
                    <h1 className="fontpage"> Já sou cadastrade </h1> 
                    </Grid>
                  
                    <Grid xs={6}>
                    <h1 className="fontpage "> Criar uma conta </h1>
                    </Grid>
                </Grid>
                <Grid container direction='row' className="PgLogin"> 
                <Grid xs={6}  >
                        <Login />
                </Grid>
                <Grid  xs={6}>               
                        <CadastroUsuario />
                </Grid>
                </Grid>



            </Grid>
        <Navbar />
        </>
    )
}


export default PaginaLogin;