import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../../services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import Produtos from '../../../../models/Produtos';
import Navbar from '../../navbar/Navbar';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './listarProdutos.css';


function ListarProdutos() {
  const [prodts, setProdts] = useState<Produtos[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/produto", setProdts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [prodts.length])

  return (
    <>
      <Navbar />
      <h1 className='prodtitulo'>OBRAS</h1>
      <Box className='display'>
        {
          prodts.map(post => (
            
            <Box m={2} >
              <Link to={`/produto/${post.id}`} className="text-decorator-none">
              <Card className='cardbackground displaycard'>
                <img className='cardmedia' src={post.foto} alt="" />
                <div className='displaytext font'>
                  <Typography  >
                    <h1>{post.nome}</h1>
                  </Typography>
                  <Typography  >
                    <p> R&#36; {post.valor.toFixed(2)}</p>
                  </Typography>
                  <Typography  >
                    <p className='pgp'>{post.descricao}</p>
                  </Typography>

                </div>

              </Card>
              
              </Link>
            

            </Box>
          ))
        }

      </Box>

    </>
  )
}

export default ListarProdutos;
