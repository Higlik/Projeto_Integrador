import React from 'react';
import CadastroCategoria from '../../components/categorias/cadastroCategoria/CadastroCategoria';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';

const Usuario = () => {
  return (
    <div>
        <ModalProduto/>
        <button><CadastroCategoria/></button>  
    </div>
   

  )
};

export default Usuario;
