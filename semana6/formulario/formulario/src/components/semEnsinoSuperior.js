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
export class SemEnsinoSuperior extends React.Component {
    render () {
        return (
            <Formulario>
                <h2>Informações gerais de ensino</h2>
    
                <label for="motivos">7. Por que você não terminou um curso de graduação?</label>
                <Inputs type="text" name="motivos" id="motivos" />
    
                <label for="complementar">8. Você fez algum curso complementar?</label>
                <Select id="complementar" name="complementar">
                <option value="semComplementar">Nenhum</option>
                <option value="comComplementar">Sim, fiz</option>
                </Select>
            </Formulario>
        )
    }
}