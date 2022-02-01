import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import Produto from '../../../models/Produto';

function ListarProduto() {
  const [prod, setProdts] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/produtos", setProdts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [prod.length])

  return (
    <>
      {
        prod.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.valor}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
  )
}

export default ListarProduto;
