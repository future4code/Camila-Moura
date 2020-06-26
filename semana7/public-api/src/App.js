import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const Container = styled.div `
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  position: absolute;
  left: 35vw;
  top: 10vh;
  width: 30vw;
`

const Select = styled.select`
  margin: 15px;
  height: 30px; 
  width: 200px;
  border-radius: 10px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`

const Activity = styled.div`
  margin: 15px;
`

class App extends React.Component {
  state = {
    activityType: "",
  }
  
  getActivity = event => {
    const typeOfActivity = event.target.value;
    axios
    .get(`http://www.boredapi.com/api/activity?type=${typeOfActivity}`)
    .then(response => {
      console.log(response.data.activity)
      this.setState({activityType: response.data.activity})
     })
      .catch(err => {
        console.log(err);
      })
  }
  
  render () {
      const chosenActivity = this.state.activityType
    
      return (
        <Container>
          <h3>Choose an activity type!</h3>
          <Select onChange={this.getActivity}>
            <option value=""></option>
            <option value="education">Education</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </Select>
          <Activity>{chosenActivity}</Activity>
        </Container>
  );
  }
  

}

export default App;
