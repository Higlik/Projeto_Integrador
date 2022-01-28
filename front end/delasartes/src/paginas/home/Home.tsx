import React from 'react';
import './home.css';
import TelaProduto from '../../components/estaticos/produtos/telaProduto/TelaProduto';
const Home = () => {
  return <div>
    <img className='imgInicial' src="https://i.imgur.com/pZQAIBh.jpg" alt="Imagem de Ceramicas" />
    <h1  className='fontTitulo mg_titulo'>Nossos Produtos</h1>
    <TelaProduto/>
  </div>;
  
};

export default Home;
