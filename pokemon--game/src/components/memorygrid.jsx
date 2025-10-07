import { useState } from "react";
import './styles.css'
import { pokemonData } from "./pokemondata";

const MemoryGrid = () => {

  const [clickCounts, setClickCounts] = useState({});
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handleClick(id) { // Handles logic for pressing a pokemon once, then twice to reset the game. 
  
    const currentCount = clickCounts[id] || 0; // Pass current ID as an array and set to 0

      if (currentCount === 1) {
        alert(`Resetting Game! Pressed ${id} twice Best Score: ${bestScore}`);
        setCurrentScore(0);
        setClickCounts({});
      } else {
        const nextScore = currentScore + 1;
        setCurrentScore(nextScore);
        setClickCounts({ ...clickCounts, [id]: currentCount + 1 });
        handleBestScore(nextScore);
      }
    }

    function handleBestScore(currentScore) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    }
  
  const shuffledPokemon = [...pokemonData].sort(() => Math.random() - 0.5);

  return (


    <div> 
    <nav className="nav"> 
      <div className="title">
      Pokemon Memory Game
    </div>
    <p> Score: {currentScore} </p>
    <p> Best Score: {bestScore}</p>
    </nav>

    <div className="grid">
      {shuffledPokemon.map(pokemon => (
        <button key={pokemon.name} onClick= {() => handleClick(pokemon.name)} className="card">
        <img src={pokemon.image} alt={pokemon.name} className="card"/>
        </button>
      ))}
    </div>

  </div>
 );
};

export default MemoryGrid

// Next time: add some flair to the look of the program. 
// pokemon font