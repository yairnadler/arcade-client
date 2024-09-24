import React from "react";
import Game from "./Game";

function HorizontalScroller(props) {
  const games = props.games;
  return (
    <div className="horizontal-scroller-container">
      <button className="scroll-btn">left</button>
      <div className="game">
        {games.map((gameItem, index) => {
          return (
            <Game
              key={index}
              id={gameItem._id}
              title={gameItem.title}
              image={gameItem.image}
              link={gameItem.link}
            />
          );
        })}
      </div>
      <button className="scroll-btn">right</button>
    </div>
  );
}

export default HorizontalScroller;
