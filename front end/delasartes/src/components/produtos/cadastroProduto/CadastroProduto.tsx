import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categorias';
import { busca, buscaId, post, put } from '../../../services/Service';
import './CadastroProduto.css'
import useLocalStorage from 'react-use-localstorage';




function CadastroProduto() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [token, setToken] = useLocalStorage('token');


  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  const [categoria, setCategoria] = useState<Categoria>(
    {
      id: 0,
      genero: '',
      descricao: ''
    })
  const [produto, setProduto] = useState<Produto>({
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
      findByIdProdutos(id)
    }
  }, [id])

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }

    })
    console.log(categorias)
  }


  async function findByIdProdutos(id: string) {
    await buscaId(`produto/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedProdutos(e: ChangeEvent<HTMLInputElement>) {

    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria
    })

  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      put(`/produto`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      alert('Produto atualizado com sucesso');
    } else {
      post(`/produto`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
      console.log(produto);
      alert('Produto cadastrado com sucesso');
    }
    back()

  }

  function back() {
    history.push('/produtos')
  }

  return (
    <>
      <Container className='modalbackground'>
        <form onSubmit={onSubmit}>
          <div className='displayformulario'>
          <h1 className='formularioTitulo'>Cadastrar Produto</h1>
          <TextField className='textfieldbackground' value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
          <TextField className='textfieldbackground' value={produto.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="valor" label="Valor" name="valor" variant="outlined" margin="normal" fullWidth />
          <TextField className='textfieldbackground' value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
          <TextField className='textfieldbackground' value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
          <TextField className='textfieldbackground' value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="foto" label="Foto" name="foto" variant="outlined" margin="normal" fullWidth />
          <FormControl >
            <InputLabel id="demo-simple-select-helper-label" className='inputdisplay'>Categoria </InputLabel>
            <Select
              className='selectdisplay'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                headers: {
                  'Authorization': token
                }
              })}>
              {
                categorias.map(categoria => (
                  <MenuItem value={categoria.id}>{categoria.genero}</MenuItem>
                ))
              }
            </Select>
            <Button type="submit" variant="contained" className='colorbuttonformulario'>
              Enviar
            </Button>
          </FormControl>

          </div>
  
        </form>
      </Container >

    </>

  )
}
export default CadastroProduto;

