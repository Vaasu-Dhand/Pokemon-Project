import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card";
import axios from "axios";

export default function Cards() {
  const [results, setResults] = useState(20);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    async function getData() {
      const baseURL = `https://pokeapi.co/api/v2/pokemon/?limit=${results}&offset=0`;
      let response = await axios.get(baseURL);
      setPokeData(response.data.results);

    }

    getData();
  }, [results]);

  

  const fetchMoreData = () => {
    setResults((results) => results + 20);
  };

  return (
    <InfiniteScroll
      dataLength={pokeData.length}
      next={fetchMoreData}
      height={'100vh'}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="grid">
        {pokeData.map((pokemon, index) => (
          <Card pokemon={pokemon} id={index + 1} key={index} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
