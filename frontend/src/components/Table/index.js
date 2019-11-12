import React, { Component } from 'react';
import { Container } from './styles';

const TableHeader = () => {
  return (
    <thead>
      <tr>
          <th>Nome</th>
          <th>Genero</th>
          <th>Sinopse</th>
          <th>Preço</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.nome}</td>
        <td>{row.genero}</td>
        <td>{row.sinopse}</td>
        <td>{row.preco}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { dadosFilme, removeFilme } = this.props;

    return (
        <Container>
            <table className="tabela-dados">
                <TableHeader />
                <TableBody characterData={dadosFilme} removeCharacter={removeFilme} />
            </table>
        </Container>
    )
  }
}

export default Table;