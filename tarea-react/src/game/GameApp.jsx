import React from "react";
import { useState, useEffect } from "react";
import CardGame from "./CardGame";
import "../css/game.css";
import NavBar from "./NavBar";

const GameApp = () => {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=b504b71590e7445987a523a8cfa77852";

  useEffect(() => {
    getGames().then((respuesta) => {
      setGame(respuesta);
      setLoading(false);
      console.log(respuesta);
    });
  }, []);

  const getGames = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      return results;
    } catch (error) {
      console.log(error);
    }
  };
  return (
     <div >
    <div>      <NavBar/></div>
      <h1>¿Cuáles son los juegos más populares en 2019?</h1>
      {
        loading ? (<h3 className="cargando">Cargando...</h3>)  : (
            <div className="cards-container"> 
                {game.map((game,index)=>( <CardGame game={game} key={index}/>))}
            </div>
        )
      }
    </div>
  );
};

export default GameApp;
