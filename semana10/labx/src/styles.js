import styled from "styled-components";

// Header

export const Header = styled.header`
  position: fixed;
  top: 0;

  height: 50px;
  width: 100vw;

  background-color: #ee524c;
  color: white;

  box-shadow: 10px 0px 15px grey;
`;

export const HeaderFirstButton = styled.button`
  width: 150px;
  height: 30px;

  position: absolute;
  left: 5vw;
  top: 10px;

  background-color: #ee524c;

  color: white;
  font-weight: bold;

  border: 2px solid white;
  border-radius: 16px;

  cursor: pointer;
  &:hover {
    background-color: white;
    color: #ee524c;
    transition: 250ms;
  }
`;

export const HeaderSecondButton = styled(HeaderFirstButton)`
  left: 17vw;
`;

export const Logout = styled(HeaderFirstButton)`
  left: 85vw;
`;

// HomePage

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const HomeLogo = styled.img`
  width: 400px;
  width: 400px;
`;

export const HomeButton = styled.button`
  width: 250px;
  height: 50px;
  margin: 25px 20px;

  color: #393939;
  font-weight: bold;

  border: 2px solid #ee524c;
  border-radius: 16px;

  cursor: pointer;
  &:hover {
    background-color: #ee524c;
    color: white;
    transition: 250ms;
  }
`;

// LoginPage

export const LoginContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 50%;

  border: 2px solid #ee524c;
  border-radius: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 90%;
`;

export const LoginInput = styled.input`
  margin: 10px 0px 20px 0px;
  height: 10%;
  border: 2px solid #e3e3e3;
  border-radius: 16px;
`;

export const LoginButton = styled(HomeButton)`
  width: 40%;
  height: 12%;
  margin: 15px auto;
`;

//ListTripsPage

export const TripsContainer = styled.div`
  width: 90vw;
  position: absolute;
  left: 5vw;
  top: 10vh;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ee524c;
  margin-bottom: 45px;
`;

export const TripsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TripBox = styled.div`
  width: 30%;
  margin: 10px;
  padding: 10px;

  border: 2px solid #ee524c;
  border-radius: 16px;

  box-shadow: 10px 0px 15px #e3e3e3;
`;

export const TripTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;