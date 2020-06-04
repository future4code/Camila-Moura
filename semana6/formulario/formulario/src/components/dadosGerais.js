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

const Select = styled.select`
    display: block;
    margin: 5%; 
`

export class DadosGerais extends React.Component {
    render () {
        return (
        <Formulario>
        <h2>Dados Gerais</h2>

        <label for="nome">1. Qual seu nome?</label>
        <Inputs type="text" name="nome" id="nome" />

        <label for="idade">2. Qual sua idade?</label>
        <Inputs type="text" name="nome" id="idade"/>

        <label for="email">3. Qual seu email?</label>
        <Inputs type="text" name="nome" id="email"/>

        <label for="escolaridade">4. Qual a sua escolaridade?</label>
            <Select id="escolaridade" name="escolaridade">
                <option value="MedioIncompleto">Ensino Médio Incompleto</option>
                <option value="MedioCompleto">Ensino Médio Completo</option>
                <option value="SuperiorIncompleto">Ensino Superior Imcompleto</option>
                <option value="SuperiorCompleto">Ensino Superior Completo</option>
            </Select>
        </Formulario>
        )
    }
}