import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import User from '../../../models/User';
import Navbar from '../../estaticos/navbar/Navbar';
import Produtos from '../../../models/Produto';
import { busca, buscaId } from '../../../services/Service';
import './cardProduto.css';




const CardProduto = () => {
    const [prodts, setProdts] = useState<Produtos[]>([]);
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [userss, setUsers] = useState<User[]>([]);



    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [produto, setProduto] = useState<Produtos>({
        id: 0,
        nome: '',
        valor: 0,
        descricao: '',
        quantidade: 0,
        foto: '',
        categoria: null,
        user: null
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        setProduto({
            ...produto,
            user: user
        })
    }, [user])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/usuarios/all", setUsers, {

        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {

        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            user: user
        })

    }


    return (
        <>
            <Navbar />
            <Box className='pgcard-top'>
                <Card className='displaycardprod'>
                    <h1 className='titulocard'>{produto.nome}</h1>
                    <Box className='display2cardprod'>
                        <div><img className='Imgcardprod' src={produto.foto} alt="Imagem Produto" /></div>
                        <div className='displaytextcard'>
                            <h2 className='titulo2card'>Descricao/Acabamento</h2>
                            <p className='textcard'>{produto.descricao}</p>
                            <div className='bordercard'></div>
                            <p className='preco'> R&#36; {produto.valor.toFixed(2)}</p>
                            <p className='textcard'> Quantidade Disponível: {produto.quantidade}</p>
                            <button className='botaocard'>Comprar</button>
                            <p className='textcard'>Parcele em até 10x</p>

                        </div>
                    </Box>


                </Card>

            </Box>



        </>
    )
};

export default CardProduto;