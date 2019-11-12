import React, { Component } from 'react';
import GlobalStyles from './styles/global'
import Routes from  './routes'
import Header from './components/Header'


export default class App extends Component {

  state = {
    filmes: [{
      nome: 'As Crônicas de Nárnia',
      genero: 'Fantasia',
      sinopse: 'Bom',
      preco: 30,
    }],
  }
  removeFilme = index => {
    const { filmes } = this.state
  
    this.setState({
      filmes: filmes.filter((filme, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = filme => {
    this.setState({ filmes: [...this.state.filmes, filme] })
  }

  render() {
    const { filmes } = this.state
    return (
      <>
        <GlobalStyles />
        <Header />
        <div>
          <Routes dadosFilme={filmes} removeFilme={this.removeFilme} handleSubmit={this.handleSubmit}/>
        </div>
      </>
    );
  }
}
