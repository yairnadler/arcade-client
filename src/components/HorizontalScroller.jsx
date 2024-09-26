import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Game from "./Game";

function HorizontalScroller(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const games = props.games;

  function prevSlide() {
    const newIndex =
      currentIndex === 0 ? games.length - 2 : currentIndex - 2;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const newIndex = currentIndex === games.length - 2 ? 0 : currentIndex + 2;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="horizontal-scroller-container">
      <KeyboardDoubleArrowLeftIcon fontSize="large" className="scroll-btn left" onClick={prevSlide} />
      <div className="game-slide">
        {games.slice(currentIndex, currentIndex + 2).map((gameItem, index) => {
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
      <KeyboardDoubleArrowRightIcon fontSize="large" className="scroll-btn right"onClick={nextSlide} />
    </div>
  );
}

export default HorizontalScroller;
