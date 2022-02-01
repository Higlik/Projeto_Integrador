
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categorias from '../../../models/Categorias';
import './listaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';

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
      {
        categorias.map(categorias => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categoria
                </Typography>
                <Typography variant="h5" component="h2">
                  {categorias.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioCategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaCategorias;