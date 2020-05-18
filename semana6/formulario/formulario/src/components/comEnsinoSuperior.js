import React from 'react';
import styled from 'styled-components';

const Formulario = styled.div `
    position: absolute;
    left: 40%;
`

const Inputs = styled.input`
    display: block;
    margin: 5%; 
`

export class EnsinoSuperior extends React.Component {
    render () {
        return (
            <Formulario>
                <h2>Informações de ensino superior</h2>

                <label for="curso">5. Qual curso?</label>
                <Inputs type="text" name="curso" id="curso" />

                <label for="unidade">6. Qual unidade de ensino?</label>
                <Inputs type="text" name="unidade" id="unidade"/>
            </Formulario>
        )
    } 
}