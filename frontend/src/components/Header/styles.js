import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    background: rgb(87, 30, 114);
    color: #FFF;
    overflow: hidden;
    
    .logo {
        height: 3em;
        float: left;
        padding: 5px 25px 5px 15px;
        background: rgb(51, 51, 51);
        border-right: solid 3px rgb(128, 57, 161);
    }

    .dir {
        float: right;
    }

    button {
        border: none;
        outline: none;
        color: white;
        background-color: inherit;
        font: inherit;
        font-size: 1.5em;
        padding: .25em 1.1em;
        height: 42px;
    }

    button:hover, .link:hover {
        transition: background .2s ease;
        background: rgb(128, 57, 161);
    }

    .link {
        text-decoration: none;
    }

    .botao {
        float: left;
        font-size: 1.5em;
        padding: .4em 1.1em;
        height: 42px;
        color: white;
        text-align: center;
    }

    .conteudo-menu {
        display: none;
        position: absolute;
        background-color: rgb(51, 51, 51);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .conteudo-menu .link {
        font-family: inherit;
        font-size: 1.25em;
        color: #FFF;
        padding: 8px 16px;
    }

    .menu-filmes:hover .conteudo-menu {
        display: flex;
        flex-direction: column;
    }

    .menu-filmes {
        float: left;
    }
`;
