import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardName,
  CardImg,
  CardDetails,
  } from "./styles";

import "./styles.css";


  function Pokemon({pokemon}) { 
    const [pokemonId, setPokemonId] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [imagePokemon, setImagePokemon] = useState("");
  
    
       const getPokemonImageUrl = (id) =>
        `https://veekun.com/dex/media/pokemon/dream-world/${id}.svg`;

      const loadIdPokemon = async () => {
        await axios.get(pokemon.url).then((response) => {
          setPokemonId(response.data.id);
          setPokemonTypes(response.data.types);
        });
  
        await setImagePokemon(getPokemonImageUrl(pokemonId));
      };
  
      loadIdPokemon();
  
    const pokemonType = pokemonTypes.map(
      (type) => type.type.name[0].toUpperCase() + type.type.name.slice(1)
    );
  
   
    return (
        <Card className={pokemonType[0]}>
            <CardImg
            src={imagePokemon}
          />
          <CardName>{pokemon.name}</CardName>
          <CardDetails>{pokemonType.join(" / ")}</CardDetails>
        </Card>
    ) 
  }
  
export default Pokemon;