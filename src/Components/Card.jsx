import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card({ pokemon, id }) {
  
  // Destructure Name and URL
  const { name, url } = pokemon;

  // State Variables
  const [data, setData] = useState({})
  const [type, setType] = useState('')
  const [stats, setStats] = useState([])
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    async function getPokemon() {
      let response = await axios.get(url);
      setData(response.data);
      setType(data.types[0].type.name)
      setStats(data.stats)
      setImgUrl(data.sprites.back_default)

      // console.log(data);  // ! Logs empty object

    }

    getPokemon();
  }, [data, url]);

return (
  <div className="card">
    <img src={imgUrl} alt="pokeImg" />
    <h4>#{id}</h4>
    <h3>{name}</h3>
    <h3>{type}</h3>
  </div>
  );
}
