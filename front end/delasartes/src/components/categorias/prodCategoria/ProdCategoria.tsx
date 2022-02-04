import React from 'react'

const ProdCategoria = () => {
  return (
    <div>
      
    </div>
  )
}

export default ProdCategoria

{/* -- EM CONSTRUÇÃO --


  
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { busca, buscaId } from '../../../services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import Produto from '../../../models/Produto';
import Navbar from '../../estaticos/navbar/Navbar';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './ListarProduto.css';
import Categorias from '../../../models/Categorias';



function ListarProduto() {
  const [categoria, setCategorias] = useState<Categorias[]>([])
  const { id } = useParams<{ id: string }>();
  let history = useHistory();

  const [user, setUser] = useState<Categorias>(
    {
        id: 0,
        genero: '',
       descricao: '',
        produto: null
    })
 

  async function getCategoria() {
    await buscaId(`categorias/${id}`, setCategorias, {
    })
  }

  useEffect(() => {
    window.scrollTo(0,0)
    getCategoria()

  }, [categoria.length])

  return (
    <>
      <Navbar />
      <h1 className='prodtitulo'>OBRAS</h1>
      <Box className='display'>
        {
          categoria.map(cat => (
            
            <Box m={2} >
              <Link to={`categorias/${id}`} className="text-decorator-none">
              <Card className='cardbackground displaycard'>
                <img className='cardmedia' src={categoria.produto?.foto} alt="" />
                <div className='displaytext font'>
                  <Typography  >
                    <h1>{categoria.produto?}</h1>
                  </Typography>
                  <Typography  >
                    <p> R&#36; {categoria.produto?.foto}</p>
                  </Typography>
                  <Typography  >
                    <p className='pgp'>{categoria.produto?.foto}</p>
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
*/}