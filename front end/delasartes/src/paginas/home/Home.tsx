import React from 'react';
import './Home.css';
import TelaProduto from '../../components/estaticos/produtos/telaProduto/TelaProduto';
const Home = () => {
  return <div>
    <img className='imgInicial' src="https://imgur.com/R1kPPuc.jpg" alt="Imagem de Ceramicas" />
    <h1  className='fontTitulo mg_titulo'>ARTE + ARTESANATO + ESCULTURAS E MUITO MAIS!</h1>
    <div className='border'></div>
    <h3 className='titulos'>ARTISTAS QUE VOCÊ PRECISA CONHECER</h3>
    <TelaProduto/>
  </div>;
  
};

export default Home;
