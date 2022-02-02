import React from 'react';
import './home.css';
import TelaProduto from '../../components/estaticos/produtos/telaProduto/TelaProduto';
import Navbar from '../../components/estaticos/navbar/Navbar'
import CaroucelComponent from '../../components/caroucelComponent/CaroucelComponent';
import { Link } from 'react-router-dom';
const Home = () => {
  return <div>
   
    <CaroucelComponent/>
    <Navbar />
    <h1 className='fontTitulo mg_titulo'>ARTE + ARTESANATO + ESCULTURAS + MUITO MAIS!</h1>
    <div className='border'></div>
    <h3 className='titulos '>PINTURAS</h3>

    <div className='imgartesanato'>
      <Link to='/produto/7'>
        <img src="https://imgur.com/uWnupVN.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/72VcnPy.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/2XbgVHh.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/qaw3Wsl.png" alt="" />
      </Link>
    </div>

    <h3 className='titulos'>ARTESANATO</h3>
    <div className='imgartesanato'>
      <Link to='/produto/7'>
        <img src="https://imgur.com/C6c4TPl.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/lEze8cS.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/4xcJnKI.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/SYQxj9n.png" alt="" />
      </Link>

    </div>
    <h3 className='titulos'>ESCULTURAS</h3>
    <div className='imgartesanato'>
      <Link to='/produto/7'>
        <img src="https://imgur.com/2TaG4ad.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/ETPhkAA.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/Fq0YOjc.png" alt="" />
      </Link>
      <Link to='/produto/7'>
        <img src="https://imgur.com/qogVRGN.png" alt="" />
      </Link>
    </div>

  </div>;

};

export default Home;
