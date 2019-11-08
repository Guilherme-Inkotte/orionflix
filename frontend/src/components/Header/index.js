import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import orionflix from '../../assets/orionflix.png'


export default class Header extends Component {
  render() {
    return (
        <Container>
            <img className="logo" alt="Logo OrionFlix" src={orionflix} />
            <div className="dir">
                <Link to="/cadastrar" className="link botao">Cadastre-se</Link>
                <Link to="/logar" className="link botao">Login</Link>
            </div>
            <div className="menu-filmes">
                <button>Filmes</button>
                <div className="conteudo-menu">
                    <Link className="link" to="/cadastrar-filme">Cadastrar</Link>
                    <Link className="link" to="/alugar">Alugar</Link>
                    <Link className="link" to="/comprar">Comprar</Link>  
                    <Link className="link" to="/atualizar">Atualizar</Link>
                    <Link className="link" to="/excluir">Excluir</Link>  
                </div>
            </div>
        </Container>
    );
  }
}
