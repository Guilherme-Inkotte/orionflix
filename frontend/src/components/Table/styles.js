import styled from 'styled-components';

export const Container = styled.div`
  
.tabela-dados {
  margin: auto;
  margin-top: 30px;
  border-collapse: collapse;
  border: 4px solid rgb(51, 51, 51);
  border-radius: 10px;
}

.tabela-dados th {
  background-color: rgb(128, 57, 161);
  padding: 8px;
  border: 4px solid rgb(51, 51, 51);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: rgb(248, 245, 245);
}

.tabela-dados td {
  background-color: rgb(248, 245, 245);
  border: 2px solid rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 26px;
  padding: 8px;
}

.tabela-dados button {
  font-size: 18px;
  background-color: rgb(128, 57, 161);
  padding: 8px;
  border: 2px solid rgb(51, 51, 51);
  border-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(248, 245, 245);
  cursor: pointer;
  transition: background .2s ease-in-out;
}

.tabela-dados button:hover {
    background: rgb(87, 30, 114);
}
`;
