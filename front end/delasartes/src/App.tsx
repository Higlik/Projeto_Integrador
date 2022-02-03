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
import ListarProdutos from './components/estaticos/produtos/listarProdutos/ListarProdutos';
import CardProduto from './components/estaticos/produtos/cardProduto/CardProduto';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
import ModalProduto from './components/estaticos/produtos/modalProduto/ModalProduto';
import CadastroProdutos from './components/estaticos/produtos/cadastroProduto/CadastroProduto';


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

            <Route exact path='/home'>
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

            <Route path='/produto/:id'>
            <CardProduto />
            </Route>

            <Route path='/sobre'>
            <Sobre />
            </Route>

            <Route path='/contato'>
            <Contato />
            </Route>

            <Route path='/cadastroproduto'>
            <CadastroProdutos />
            </Route>

          </div>
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;