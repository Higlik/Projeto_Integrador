import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import Usuario from './paginas/usuario/Usuario';
import ListarCategorias from './components/estaticos/categorias/listarCategorias/ListarCategorias';
<<<<<<< HEAD
import ListarProdutos from './components/estaticos/produtos/listarProdutos/listarProdutos';
import Sobre from './paginas/sobre/Sobre';
=======
import ListarProdutos from './components/estaticos/produtos/listarProdutos/ListarProdutos';
import CardProduto from './components/estaticos/produtos/cardProduto/CardProduto';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
>>>>>>> b5fd5bb6326044f52e0b01843ca5c1723ea8a13b


function App() {
  return (

    <Router>
  
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Navbar />
              <Home />
            </Route>
            
            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/usuario'>
              <Usuario />
            </Route>

            <Route path='/categorias'>
              <ListarCategorias />
            </Route>

            <Route path='/produtos'>
              <ListarProdutos />
            </Route>

<<<<<<< HEAD
            <Route path='/sobre'>
              <Sobre />
=======
            <Route path='/produto/:id'>
            <CardProduto />
            </Route>

            <Route path='/sobre'>
            <Sobre />
            </Route>

            <Route path='/contato'>
            <Contato />
>>>>>>> b5fd5bb6326044f52e0b01843ca5c1723ea8a13b
            </Route>

          </div>
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;