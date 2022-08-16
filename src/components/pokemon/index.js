import {
    Card,
    CardName,
  } from "./styles";

import "./styles.css";

// function Pokemon(params) { 
//     return(
//         <li>{params.name}</li>
//     ) 
//   }

  function Pokemon({name, index}) { 
    return(
        <Card >
            <h5>{index}</h5>
          <CardName>{name}</CardName>
        </Card>
    ) 
  }
  
export default Pokemon;