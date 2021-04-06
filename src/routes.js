import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


import Login from './pages/Login/index'
import Home from './pages/Home/index'
import CadServidor from './pages/Cad_Servidor/index'
import Relatorio from './pages/Relatorios/index'
import EditServidor from './pages/Edit_Servidor/index'
import DocumentPdf from './pages/DocumentPdf/index'
import NotFound from './pages/NotFound/index';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
    return (
    <>
    <BrowserRouter>
   
        <Switch>
        <Route path="/" exact component={Login} />
            <PrivateRoute path="/list_servidor" exact component={Home} />
            <PrivateRoute path="/relatorio" exact component={Relatorio} />
            <PrivateRoute path="/cad_servidor" exact component={CadServidor} />
            <PrivateRoute path={`/edit_servidor/:_id`} exact component={EditServidor} />
            <PrivateRoute path={`/document_pdf/:_id`} exact component={DocumentPdf} />
            <Route component={NotFound} />
            
        </Switch> 
      
     </BrowserRouter>
    </>
   )
}

export default Routes