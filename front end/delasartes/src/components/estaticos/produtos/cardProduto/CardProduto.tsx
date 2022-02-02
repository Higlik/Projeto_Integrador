import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Categorias from '../../../../models/Categorias';
import Navbar from '../../navbar/Navbar';
import Produtos from '../../../../models/Produtos';
import { busca, buscaId } from '../../../../services/Service';
import './cardProduto.css';




const CardProduto = () => {
    const [prodts, setProdts] = useState<Produtos[]>([]);
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categorias>(
        {
            id: 0,
            genero: '',
            descricao: ''
        })

    const [produto, setProduto] = useState<Produtos>({
        id: 0,
        nome: '',
        valor: 0,
        descricao: '',
        quantidade: 0,
        foto: '',
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }


    return (
        <>
            <Navbar />
            <Box className='pgcard-top'>
                <Card className='displaycardprod'>
                    <h1 className='titulocard'>{produto.nome}</h1>
                    <div><img className='Imgcardprod' src={produto.foto} alt="Imagem Produto" /></div>
                    <div className='displaytextcard'>
                        <h2 className='titulo2card'>Descrição/Acabamento</h2>
                        <p className='textcard'>{produto.descricao}</p>
                        <div className='bordercard'></div>
                        <p className='textcard'>By Pablo Vittar</p>
                        <p className='preco'> R&#36; {produto.valor.toFixed(2)}</p>
                        <button className='botaocard'>Comprar</button>
                        <p className='textcard'>Parcele em até 10x</p>   
                        
                    </div>

                </Card>

            </Box>



        </>
    )
};

export default CardProduto;