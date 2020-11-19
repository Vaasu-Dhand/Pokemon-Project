import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Cards />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
