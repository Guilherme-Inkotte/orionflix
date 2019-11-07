import styled from 'styled-components';

export const Container = styled.div`
    height: 3.5em;
    background: #5a1361;
    color: #FFF;

    display: flex;
    align-items: center;
    
    .logo {
        height: 2.5em;
    }

    button {
        background: none;
        border: none;
        padding: 4px 16px;
        color: white;
        cursor: pointer;
        font-family: inherit;
        font-weight: bold;
        font-size: 1.5em;
        border-radius: 4px;
        float: right;
        transition: background 0.2s ease;
    }

    button:hover {
        background: #814786;
    }

    
`;
