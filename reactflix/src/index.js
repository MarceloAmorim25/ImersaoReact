import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CadastroVideo from './pages/Cadastro'
import CadastroCategoria from './pages/Cadastro/Categoria'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>Page Not Found</div>)} />
    </Switch>
  </BrowserRouter>,   
  document.getElementById('root')
);

serviceWorker.unregister();
