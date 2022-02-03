
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import CadastroCategoria from '../../components/categorias/cadastroCategoria/CadastroCategoria';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import './Usuario.css';
import Categoria from '../../models/Categorias';
import Produto from '../../models/Produto';
import { busca, buscaId, post, put } from '../../services/Service';


function Usuario () {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [token, setToken] = useLocalStorage('token');
  const [prod, setProdts] = useState<Produto[]>([])
  
  
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
    window.scrollTo(0,0)
    getPost()

  }, [prod.length])
  return (
    
    <div>
        
    </div>
   

  )
};

export default Usuario;


