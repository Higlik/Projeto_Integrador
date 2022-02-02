import React from 'react'
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './TelaProduto.css'

const TelaProduto = () => {
  return (
    <div className='dist_'>
            <Link  to='/produto/1' className='text-decoration-none'>
                    <img className='zoom' src="https://imgur.com/uWnupVN.png" alt="Produto 1" /> 
                   
            </Link>
            <Link  to='/produto/2' className='text-decoration-none'>
                    <img className='zoom' src="https://imgur.com/72VcnPy.png" alt="Produto 2" />
            
            </Link>

            <Link  to='/produto/3' className='text-decoration-none'>
                    <img className='zoom' src="https://imgur.com/2XbgVHh.png" alt="Produto 3" />
                    
            </Link>
    </div>
  )
}

export default TelaProduto;