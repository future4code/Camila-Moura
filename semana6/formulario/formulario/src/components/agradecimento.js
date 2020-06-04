import React from 'react';
import styled from 'styled-components';

const Formulario = styled.div `
    position: absolute;
    left: 40%;
`

export class Agradecimento extends React.Component {
    render () {
        return (
            <Formulario>
                <h2>O formulário acabou!</h2>
                <p>Obrigada por participar! Entraremos em contato</p>
            </Formulario>
        )
    }
}