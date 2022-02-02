import React from 'react';
import './home.css';
import TelaProduto from '../../components/estaticos/produtos/telaProduto/TelaProduto';
import Navbar from '../../components/estaticos/navbar/Navbar'
import CaroucelComponent from '../../components/caroucelComponent/CaroucelComponent';
const Home = () => {
  return <div>
    <Navbar/>
   <img className='imgInicial' src="https://imgur.com/R1kPPuc.png" alt="Imagem Inicial" />
    <h1  className='fontTitulo mg_titulo'>ARTE + ARTESANATO + ESCULTURAS + MUITO MAIS!</h1>
    <div className='border'></div>
    <h3 className='titulos'>PINTURAS</h3>
    <TelaProduto/>
    <h3 className='titulos'>ARTESANATO</h3>
    <div className='imgartesanato'>
      <img src="https://imgur.com/C6c4TPl.png" alt="" />
      <img src="https://imgur.com/lEze8cS.png" alt="" />
      <img src="https://imgur.com/4xcJnKI.png" alt="" />
      <img src="https://imgur.com/SYQxj9n.png" alt="" />
    </div>
  </div>;
  
};

export default Home;
