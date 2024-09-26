import React from "react";

function Game(props) {
  return (
    <div className="game-container">
      <div className="game">
        <h2>{props.title}</h2>
        <a href={props.link} target="_blank">
          <img crossOrigin="anonymous" src={props.image} />
        </a>
      </div>
    </div>
  );
}

export default Game;
