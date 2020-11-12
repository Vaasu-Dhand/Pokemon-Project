import React, { useState, useEffect } from "react";
import ColorScheme from "./ColorScheme";
import ProgressBar from './ProgressBar'
import axios from "axios";

export default function Card({ pokemon, id }) {
  // Destructure Name and URL
  const { name, url } = pokemon;

  // State Variables
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [stats, setStats] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      let response = await axios.get(url);
      setData(response.data);
      setType(response.data.types[0].type.name);
      setStats(response.data.stats);
      // setImgUrl(response.data.sprites.front_default) API 1
      setImgUrl(`https://cdn.traction.one/pokedex/pokemon/${id}.png`);
    }

    getPokemon();
  }, [url]);

  // console.log({data});

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={"card-container" + (flipped ? " flipped" : "")}
      onMouseEnter={flip}
      onMouseLeave={flip}
    >
      <div className="card">
        {/* Front */}
        <div
          className="front card"
          style={{ backgroundColor: ColorScheme(type) }}
        >
          <div className="wrapper-img">
            <img src={imgUrl} alt="pokeImg" width="150px" height="150px" />
          </div>
          <h4>#{id}</h4>
          <h2>{name}</h2>
          <h3>{type}</h3>
        </div>
        {/* Back */}
        <div
          className="back card"
          style={{ backgroundColor: '#424242' }}
        >
          <div className="stats">
            {stats.map((item, index) => (
              <ProgressBar
                key={index}
                width={item.base_stat}
                statName={item.stat.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
