import React from "react";

function Game(props) {
  
  return (
    <div className="game-container">
      <h2>{props.title}</h2>
      <a href={props.link} target="_blank">
      <img crossOrigin="anonymous" src={props.image} />
      </a>
    </div>
  );
}

export default Game;
