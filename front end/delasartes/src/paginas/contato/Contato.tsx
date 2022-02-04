import React, { useEffect } from "react";
import CadastroUsuario from "../cadastroUsuario/CadastroUsuario";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import Navbar from "../../components/estaticos/navbar/Navbar";
import './Contato.css';



function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0)
    
    }, [])
    return (

        <>
            <Grid xs={12}>
            <Box className="PgTopLogin">
                <h1 className='fontTitulo mg_titulo'>Fale conosco</h1>
                <div className='border'></div>
            </Box>

                <Grid container xs={12}   >
                </Grid>
                <Grid container direction='row' className="PgContato" > 
                <Grid xs={6} className="MarginContato" >
                         <form >
                        <TextField id='usuario' label='Nome' variant='outlined' name='usuario' margin='normal' className="textfielContato TextfieldContatoBG" />
                        <TextField id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' className="textfielContato TextfieldContatoBG" />
                        <TextField id='usuario' label='Mensagem' variant='outlined' name='usuario' margin='normal' className="textfielContato TextfieldContatoBG"  multiline rows={4} />
                        <Box marginTop={10} marginLeft={0} >
                            <Button type='submit' variant='contained' className='ButtonContatoBGcolor'>
                               <p className='ButtonEnviarText'> Enviar </p> 
                            </Button>
                        </Box>
                        </form>
                </Grid>
                <Grid  xs={6} className="MarginContato" >               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.3753344208858!2d-46.68794730694014!3d-23.57739666526359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce576d1b6136f3%3A0xd07acf864bcd7990!2sAv.%20Brg.%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1643923050772!5m2!1spt-BR!2sbr" loading="lazy" className="Mapa"></iframe>  
                <h4 className="ContatoMPcolor">Endereço: Av.Brg. Faria Lima</h4>
                <h4 className="ContatoMPcolor">E-mail: delasartes@delasartes.com.br</h4>     
                <h4 className="ContatoMPcolor">Telefone: (11) 40028922 </h4>
                </Grid>
                </Grid>



            </Grid>
        <Navbar />
        </>
    )
}


export default Contato;