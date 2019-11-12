import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 20px auto;
  background: rgb(51, 51, 51);
  border-radius: 4px;
  padding: 16px;

  h1 {
    border-bottom: 2px solid rgb(128, 57, 161);
    margin-bottom: 16px; 
    color: #FFF;
  }

  label {
    font-size: 18px;
    color: #FFF;
    display: block;
    margin-bottom: 4px;
  }

  input {
    border: none;
    border-bottom: 2px solid rgb(87, 30, 114);
    margin-bottom: 8px;
    padding: 4px 8px;
    font-size: 16px;
    width: 100%;
  }

  .btn {
    background: rgb(128, 57, 161);
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    display: block;
    padding: 8px;
    margin-top: 16px;
    border-radius: 2px;
    cursor: pointer;
  }

  .btn:hover {
    background: rgb(87, 30, 114);
  }
`;
