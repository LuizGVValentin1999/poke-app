import logo from './logo.svg';
import './App.css';
import axios from './api/axios';
import { useState } from 'react';
import styled from "styled-components";

import PokemonComponent from "./components/pokemon";

 const Appdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() { 
  const [ content, setContent] = useState(['false']);
  const fetchPokemons = async () => {
    console.log('aass'); 
   const response = await axios.get('/pokemon'); 
   setContent(response.data.results); 
  }
  
  if(content =='false')
    fetchPokemons(); 

  return ( 
    <div className="App">
       
      <header className="App-header">
      <Appdiv>
      {content.map(({name}, index) => (
        <PokemonComponent  name={name} index={index} />
        ))} 
         </Appdiv>
      </header>
    </div>
  );
}

export default App;
 