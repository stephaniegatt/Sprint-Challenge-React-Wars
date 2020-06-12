import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import H1 from './components/H1';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);
  
  
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then((response) => {
        setCharacterData(response.data.results)
        console.log("this is my data", response.data)
      })
      .catch((error) => {
        console.log("No Bueno", error)
      })
  }, [])
  return (
    <div className="App">
      <H1 className="Header">React Wars</H1>
      {
      characterData.map((data, i) => (
       <Character character={data} key={i} /> 
      ))
      }
    </div>
  );
}

export default App;
