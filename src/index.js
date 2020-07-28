import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CadastroVídeo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';



  const Pagina404 = () =>(<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>

      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/cadastro/video" component={CadastroVídeo} />
        <Route path="/cadastro/Categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>

  </BrowserRouter>,
  
  document.getElementById('root')
);


