import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";

export default function Cards() {
  const [startIndex, setStartIndex] = useState(0);
  const [pokeData, setPokeData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const baseURL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${startIndex}`;
      let response = await axios.get(baseURL);
      setPokeData(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
    }
    
    getData();
  }, []);
  
  
  return (
    <div className="grid">
      {pokeData.map((pokemon, index) => (
        <Card pokemon={pokemon} id={index + 1} key={index} />
      ))}
    </div>
  );
}
