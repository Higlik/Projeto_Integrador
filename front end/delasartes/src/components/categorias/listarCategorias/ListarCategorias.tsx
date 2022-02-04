import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categorias from '../../../models/Categorias';
import './listaCategoria.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import Navbar from '../../../components/estaticos/navbar/Navbar';
import CardMedia from '@mui/material/CardMedia';


function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([])
  let history = useHistory();

 

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      
    })
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    getCategorias()
  }, [categorias.length])

  return (
    <>
      <Navbar />

      <Box className='pg-top  displaycategoria'>
        {
          categorias.map(categorias => (

            <Box m={2}>
              <Card className='categoriatm'>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="570"
                  image={categorias.descricao}
                />
               

              </Card>
            </Box>
          ))
        }
      </Box>


    </>
  );
}


export default ListaCategorias;