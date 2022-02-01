import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import Categorias from '../../../models/Categorias';
import { buscaId, post, put } from '../../../services/Service';


function CadastroCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [categorias, setCategorias] = useState<Categorias>({
        id: 0,
        genero: '',
        subgenero: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategorias(e: ChangeEvent<HTMLInputElement>) {

        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categorias" + JSON.stringify(categorias))

        if (id !== undefined) {
            console.log(categorias)
            put(`/categorias`, categorias, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada com sucesso');
        } else {
            post(`/categorias`, categorias, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history.push('/categorias')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categorias.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategorias(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;

