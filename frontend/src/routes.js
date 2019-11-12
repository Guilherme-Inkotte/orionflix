import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormCadastroFilme from './components/FormCadastroFilmes';

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact/>
                <Route 
                    path="/cadastrar-filme" 
                    render={(props) => <FormCadastroFilme {...props} handleSubmit={this.props.handleSubmit} />}
                />
            </Switch>
        </BrowserRouter>
    );
  }
}