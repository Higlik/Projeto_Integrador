import React from 'react';
import CadastroCategoria from '../../components/estaticos/categorias/cadastroCategoria/CadastroCategoria';
import ModalProduto from '../../components/estaticos/produtos/modalProduto/ModalProduto';

const Usuario = () => {
  return (
    <div>
        <ModalProduto/>
        <button><CadastroCategoria/></button>  
    </div>
   

  )
};

export default Usuario;
