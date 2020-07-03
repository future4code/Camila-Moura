import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  FormBox,
  WeekBox,
  WeekendBox,
  FormInput,
  FormSelect,
  FormButton,
  PlannerContainer,
  WeekDayBox,
  WeekDayText,
} from "./styles.js";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-camila";

function App() {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      setTaskList(response.data);
      console.log(response.data);
    } catch (e) {
      alert("Falha ao carregar tarefas");
      console.log(e);
    }
  };

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const createTask = async () => {
    let body = {
      text: task,
      day: day,
    };

    try {
      const response = await axios.post(`${baseUrl}`, body);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createTask();
    getTaskList();

    setTask("");
  };

  const mondayTasks = taskList.filter((task) => {
    return task.day === "segunda";
  });

  const tuesdayTasks = taskList.filter((task) => {
    return task.day === "terca";
  });

  const wednesdayTasks = taskList.filter((task) => {
    return task.day === "quarta";
  });

  const thursdayTasks = taskList.filter((task) => {
    return task.day === "quinta";
  });

  const fridayTasks = taskList.filter((task) => {
    return task.day === "sexta";
  });

  const saturdayTasks = taskList.filter((task) => {
    return task.day === "sabado";
  });

  const sundayTasks = taskList.filter((task) => {
    return task.day === "domingo";
  });

  return (
    <div>
      <FormBox>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            onChange={handleInput}
            placeholder={"Insira tarefa"}
            id="task"
          ></FormInput>
          <label htmlFor="day">Dia</label>
          <FormSelect id="day" onChange={handleDay}>
            <option value="segunda">Segunda-Feira</option>
            <option value="terca">Terça-Feira</option>
            <option value="quarta">Quarta-Feira</option>
            <option value="quinta">Quinta-Feira</option>
            <option value="sexta">Sexta-Feira</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </FormSelect>
          <FormButton>Criar tarefa</FormButton>
        </form>
      </FormBox>
      <PlannerContainer>
        <WeekBox>
          <WeekDayBox>
            <WeekDayText>Segunda</WeekDayText>
            {mondayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </WeekDayBox>
          <WeekDayBox>
            <WeekDayText>Terça</WeekDayText>
            {tuesdayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </WeekDayBox>
          <WeekDayBox>
            <WeekDayText>Quarta</WeekDayText>
            {wednesdayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </WeekDayBox>
          <WeekDayBox>
            <WeekDayText>Quinta</WeekDayText>
            {thursdayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </WeekDayBox>
          <WeekDayBox>
            <WeekDayText>Sexta</WeekDayText>
            {fridayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </WeekDayBox>
        </WeekBox>

        <WeekendBox>
          <div>
            <WeekDayText>Sábado</WeekDayText>
            {saturdayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </div>
          <div>
            <WeekDayText>Domingo</WeekDayText>
            {sundayTasks.map((task) => {
              return <li>{task.text}</li>;
            })}
          </div>
        </WeekendBox>
      </PlannerContainer>
    </div>
  );
}

export default App;
