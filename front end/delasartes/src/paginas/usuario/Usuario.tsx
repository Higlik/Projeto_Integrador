import React from 'react';
import CadastroCategoria from '../../components/estaticos/categorias/cadastroCategoria/cadastroCategoria';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ModalProduto from '../../components/estaticos/produtos/modalProduto/modalProduto';
import './Usuario.css'

const Usuario = () => {
 
  return (
    
    <div>
        <Navbar/>
        <div className='mg-top'><ModalProduto/></div>
        <button><CadastroCategoria/></button>  
    </div>
   

  )
};

export default Usuario;
