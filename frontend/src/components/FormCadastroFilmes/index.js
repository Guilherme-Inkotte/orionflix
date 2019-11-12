import React, { Component } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default class FormCadastroFilmes extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      nome: '',
      sinopse: '',
      genero: '',
      preco: '',
    }

    this.state = this.initialState;
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
    [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { nome, genero, sinopse, preco } = this.state;
    return (
        <Container>
          <h1>Cadastre o filme</h1>
          <form onSubmit={this.submitForm}>
            <label htmlFor="nome">Nome do filme</label>
            <input 
              type="text" 
              name="nome" 
              placeholder="Digite o nome do filme"
              value={nome}
              onChange={this.handleChange} 
            />
            <label htmlFor="sinopse">Sinopse</label>
            <input 
              type="text" 
              name="sinopse" 
              placeholder="Digite a sinopse do filme"
              value={sinopse}
              onChange={this.handleChange}  
            />
            <label htmlFor="genero">Gênero</label>
            <input 
              type="text" 
              name="genero" 
              placeholder="Digite o gênero do filme"
              value={genero}
              onChange={this.handleChange} 
            />
            <label htmlFor="preco">Preço de venda (R$)</label>
            <input 
              type="text" 
              name="preco" 
              placeholder="Digite o preço do filme"
              value={preco}
              onChange={this.handleChange} 
            />
            <Link to="/listar-filmes"><button type="submit" onClick={ this.submitForm } className="btn">Cadastrar</button></Link>
          </form>
        </Container>
    );
  }
}
