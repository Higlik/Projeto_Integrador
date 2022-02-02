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
import CardProduto from './components/estaticos/produtos/cardProduto/CardProduto';
import PaginaLogin from './paginas/paginaLogin/PaginaLogin';
=======
import ListarProdutos from './components/estaticos/produtos/listarProdutos/ListarProdutos';
import CardProduto from './components/estaticos/produtos/cardProduto/CardProduto';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
>>>>>>> 32d783894370cab4503d10ef55239ec0377c6314


function App() {
  return (

    <Router>
  
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/login'>
              <PaginaLogin />
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

<<<<<<< HEAD
=======
            <Route path='/sobre'>
            <Sobre />
            </Route>

            <Route path='/contato'>
            <Contato />
            </Route>

>>>>>>> 32d783894370cab4503d10ef55239ec0377c6314
          </div>
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;