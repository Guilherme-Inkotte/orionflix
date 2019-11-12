import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormCadastroFilmes from './components/FormCadastroFilmes';
import Table from './components/Table';


export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                  path="/listar-filmes" 
                  exact
                  render={(props => <Table {...props} dadosFilme={this.props.dadosFilme} removeFilme={this.props.removeFilme} />)}
                />
                <Route 
                    path="/" 
                    render={(props) => <FormCadastroFilmes {...props} handleSubmit={this.props.handleSubmit} />}
                />
            </Switch>
        </BrowserRouter>
    );
  }
}