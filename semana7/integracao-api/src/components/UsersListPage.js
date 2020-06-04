import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListOfUsers = styled.ul `
    display: flex;
    flex-direction: column;
    list-style: none;
`

const UserLine = styled.li`
    display: flex;
    border: 1px solid black;
    width: 10vw;
    position: relative;
    left: 40vw;
    margin: 10px;
    padding: 10px;
`
const DeleteButton = styled.span `
    color: red;
    cursor: pointer;
    position: absolute;
    left: 9.5vw;
`

class UsersListPage extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount () {
        this.getUserData();
    }
    
    getUserData = () => {
        axios 
          .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "camila-moura-mello"
            }
          }
          )
          .then(response => {
            this.setState ({usersList: response.data})
          })
      }

      handleUserDeletion = (userId) => {
        if (window.confirm("Tem certeza que quer deletar?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
            headers: {
                Authorization: "camila-moura-mello"
            }
        }
        )
        .then(() => {
            alert("Usuário apagado com sucesso!");
            this.getUserData();
        })
        .catch(e => {
            alert("Erro ao apagar usuário")
        }) 
      }}        

    render () {
        return (
        <ListOfUsers>
            {this.state.usersList.length === 0 && <div>Carregando...</div>}
            {this.state.usersList.map(user => {
                return (
                <UserLine>
                    {user.name} 
                    <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>X</DeleteButton>
                </UserLine>
                )
            })}
        </ListOfUsers>
        )
    }
}

export default UsersListPage 