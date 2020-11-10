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
      await setPokeData(response.data.results);
      await setNextUrl(response.data.next);
      await setPrevUrl(response.data.previous);
      console.log(response);
      // console.log(pokeData.length);
      // console.log(pokeData, nextUrl, prevUrl);
    }

    getData();
  }, []);

  return (
    <div>
      {pokeData.map((pokemon, index) => (
        <Card pokemon={pokemon} id={index + 1} key={Math.random()} />
      ))}
    </div>
  );
}
