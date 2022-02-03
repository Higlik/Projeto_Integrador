import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import Produto from '../../../models/Produto';
import Navbar from '../../estaticos/navbar/Navbar';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './ListarProduto.css';



function ListarProduto() {
  const [prod, setProdts] = useState<Produto[]>([])
  
  let history = useHistory();

 

  async function getPost() {
    await busca("/produto", setProdts, {
    })
  }

  useEffect(() => {
    window.scrollTo(0,0)
    getPost()

  }, [prod.length])

  return (
    <>
      <Navbar />
      <h1 className='prodtitulo'>OBRAS</h1>
      <Box className='display'>
        {
          prod.map(post => (
            
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

export default ListarProduto;
