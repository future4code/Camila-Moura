import styled from "styled-components";

/* Estilos gerais do componente App */

export const MainContainer = styled.div`
  background-color: #ffeeed;
  width: 100vw;
  height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  position: absolute;
  left: 37.5vw;
  top: 10vh;
  width: 400px;
  height: 600px;

  background-color: white;

  border-radius: 8px;
  box-shadow: 5px 10px 8px #a85d58;
`;

export const Logo = styled.img`
  width: 200px;
  height: 40px;
  margin: 10px;
`;

/* Estilos da tela de escolha */

export const Icon = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
`;

export const Profile = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 350px;
  margin-bottom: 10px;
`;

export const ProfileName = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProfileBio = styled.span`
  margin: 10px;
  font-size: 16px;
`;

export const LikeButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 530px;
  right: 90px;
  background: none;
  color: inherit;
  border: 3px solid #179c4e;
  border-radius: 25px;
  cursor: pointer;
`;

export const DislikeButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 530px;
  left: 90px;
  background: none;
  color: inherit;
  border: 3px solid #ff6358;
  border-radius: 25px;
  cursor: pointer;
`;

/* Estilos do botão de limpar matches */

export const ClearButton = styled.button`
  background: #ffeeed;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid #ff6358;
  margin-top: 20px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background: #ff6358;
    color: white;
  }
`;

/* Estilos da lista de matches */

export const MatchesList = styled.span`
  position: absolute;
  top: 70px;
  left: 20px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
`;

export const MatchIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const MatchInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
