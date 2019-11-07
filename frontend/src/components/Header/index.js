import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import orionflix from '../../assets/orionflix.png'


export default class Header extends Component {
  render() {
    return (
        <Container>
            <img className="logo" alt="Logo OrionFlix" src={orionflix} />
            <Link to="/cadastrar" className="dir">Cadastre-se</Link>
            <Link to="/logar" className="dir">Login</Link>
            <div>
                <button>Filmes</button>
                <div className="conteudo-menu">
                    <div>
                        <div className="coluna">
                            <Link to="/cadastrar-filme">Cadastrar</Link>
                            <Link to="/alugar">Alugar</Link>
                            <Link to="/comprar">Comprar</Link>  
                        </div>
                        <div className="coluna">
                            <Link to="/atualizar">Atualizar</Link>
                            <Link to="/excluir">Excluir</Link>  
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
  }
}
