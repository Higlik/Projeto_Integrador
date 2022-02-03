import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import Usuario from './paginas/usuario/Usuario';
<<<<<<< HEAD
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias';
import ListarProdutos from './components/produtos/listarProdutos/ListarProduto';
import CardProduto from './components/produtos/cardProduto/CardProduto';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
import ModalProduto from './components/produtos/modalProduto/ModalProduto';
import CadastroProdutos from './components/produtos/cadastroProduto/CadastroProduto';
import DeletaProduto from './components/produtos/deletaProduto/DeletaProduto';

=======
import ListarCategorias from './components/estaticos/categorias/listarCategorias/ListarCategorias';
import ListarProdutos from './components/estaticos/produtos/listarProdutos/listarProdutos';
import CardProduto from './components/estaticos/produtos/cardProduto/CardProduto';
import PaginaLogin from './paginas/paginaLogin/PaginaLogin';
import Sobre from './paginas/sobre/Sobre';
<<<<<<< HEAD
=======
import Contato from './paginas/contato/Contato';
>>>>>>> 32d783894370cab4503d10ef55239ec0377c6314
>>>>>>> 175d2a214eed4acdb2f17dfaa68d46898a9d665b
>>>>>>> f71d08f4dfbeab4d5e086a45c634f3dfcd211ca6


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

            <Route path='/sobre'>
            <Sobre />
            </Route>

<<<<<<< HEAD
=======
            <Route path='/contato'>
            <Contato />
            </Route>

<<<<<<< HEAD
            <Route path='/cadastroproduto'>
            <CadastroProdutos />
            </Route>

            <Route path='/deletarPostagem/:id'>
            <DeletaProduto />
            </Route>

=======
>>>>>>> 32d783894370cab4503d10ef55239ec0377c6314
>>>>>>> 175d2a214eed4acdb2f17dfaa68d46898a9d665b
>>>>>>> f71d08f4dfbeab4d5e086a45c634f3dfcd211ca6
          </div>
        </Switch>
      <Footer />
    </Router>

  );
}

export default App;