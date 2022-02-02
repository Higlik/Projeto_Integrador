
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categorias from '../../../../models/Categorias';
import './listaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../../services/Service';
import Navbar from '../../navbar/Navbar';
import CardMedia from '@mui/material/CardMedia';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
      history.push("/login")
    }
  }, [token])


  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
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
                  className='cursor'
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