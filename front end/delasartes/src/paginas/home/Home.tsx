import React, { useEffect } from 'react';
import './home.css';
import Navbar from '../../components/estaticos/navbar/Navbar'
import CaroucelComponent from '../../components/caroucelComponent/CaroucelComponent';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

}, [])
  return <div>
   
    <CaroucelComponent />
   
    <h1 className='fontTitulo mg_titulo'>ARTE + ARTESANATO + ESCULTURAS + MUITO MAIS!</h1>
    <div className='border'></div>
    <h3 className='titulos '>PINTURAS</h3>

    <div className='imgartesanato'>
      <Link to='/produto/1'>
        <img className='zoom'src="https://imgur.com/uWnupVN.png" alt="" />
      </Link>
      <Link to='/produto/2'>
        <img className='zoom' src="https://imgur.com/72VcnPy.png" alt="" />
      </Link>
      <Link to='/produto/3'>
        <img className='zoom' src="https://imgur.com/2XbgVHh.png" alt="" />
      </Link>
      <Link to='/produto/4'>
        <img className='zoom' src="https://imgur.com/qaw3Wsl.png" alt="" />
      </Link>
    </div>
    
    <h3 className='titulos'>ARTESANATO</h3>
    <div className='imgartesanato'>
      <Link className='zoom' to='/produto/5'>
        <img src="https://imgur.com/C6c4TPl.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/6'>
        <img src="https://imgur.com/lEze8cS.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/7'>
        <img src="https://imgur.com/4xcJnKI.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/8'>
        <img src="https://imgur.com/SYQxj9n.png" alt="" />
      </Link>

    </div>
    <h3 className='titulos'>ESCULTURAS</h3>
    <div className='imgartesanato'>
      <Link to='/produto/9'>
        <img className='zoom' src="https://imgur.com/2TaG4ad.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/10'>
        <img src="https://imgur.com/ETPhkAA.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/11'>
        <img src="https://imgur.com/Fq0YOjc.png" alt="" />
      </Link>
      <Link className='zoom' to='/produto/12'>
        <img src="https://imgur.com/qogVRGN.png" alt="" />
      </Link>
    </div>
    <Navbar />
  </div>;

};

export default Home;
