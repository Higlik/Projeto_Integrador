import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './TelaCategoria.css'
import Categorias from '../../../../models/Categorias';
import { busca } from '../../../../services/Service';

const TelaCategoria = () => {
    const [categorias, setCategorias] = useState<Categorias[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

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

    useEffect(() => {
        window.scrollTo(0, 0)
        getCategorias()

    }, [categorias.length])

    return (
        <div className='dist_'>
            <Link to='/categorias/6' className='text-decoration-none'>
                <img className='zoom img-relative' src="https://imgur.com/uWnupVN.png" alt="Produto 1" />
            </Link>
            <Link to='/categorias/7' className='text-decoration-none'>
                <img className='zoom img-relative' src="https://imgur.com/72VcnPy.png" alt="Produto 2" />
            </Link>
            <Link to='/categorias/8' className='text-decoration-none'>

            </Link>
        </div>
    )
}

export default TelaCategoria;