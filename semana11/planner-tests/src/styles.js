import styled from "styled-components";

export const FormBox = styled.div`
  width: 50%;
  height: 10%;

  position: absolute;
  left: 25%;
  top: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #2ec4b6;

  box-shadow: 10px 10px 30px #d4d4d4;

  border-radius: 16px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #27a89c;

  width: 350px;
  height: 25px;
  margin: 0px 10px;
`;

export const FormSelect = styled.select`
  border: none;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #27a89c;

  width: 150px;
  height: 30px;
  margin: 0px 10px;
`;

export const FormButton = styled.button`
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px #27a89c;
  background-color: #cbf3f0;

  font-weight: bold;

  width: 100px;
  height: 30px;
  margin: 0px 10px;

  cursor: pointer;

  &:hover {
    background-color: #ff9f1c;
    color: white;
    transition: 250ms;
  }
`;

export const PlannerContainer = styled.div`
  border: 2px solid #ff9f1c;
  border-radius: 32px;

  box-shadow: 10px 10px 30px #d4d4d4;

  width: 90vw;
  height: 75vh;

  position: absolute;
  left: 5%;
  top: 20%;
`;

export const WeekBox = styled.div`
  width: 90%;
  height: 55%;

  border-bottom: 1px solid #7d7d7d;

  position: absolute;
  left: 5%;
  top: 5%;

  display: flex;
  justify-content: space-around;
`;

export const WeekendBox = styled.div`
  width: 90%;
  height: 20%;

  position: absolute;
  left: 5%;
  top: 65%;

  display: flex;
  justify-content: space-evenly;
`;

export const WeekDayBox = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
`;

export const WeekDayText = styled.p`
  align-self: flex-start;
  font-weight: bold;
  font-size: 20px;
  color: #2ec4b6;
`;
