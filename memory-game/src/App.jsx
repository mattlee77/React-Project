import React, { useState, useEffect } from 'react'
import './App.css'
import initialCardData from './data/cards.js';

function App() {
  // --- State Variables ---
  // 1. cards: The array of card objects in their current (potentially shuffled) order.
  const [cards, setCards] = useState(() => {
    // Initialize by creating a shallow copy of the imported data.
    // We do this to avoid mutating the original imported array.
    return [...initialCardData];
  });

  // 2. clickedIds: An array of IDs that have been clicked in the current round.
  const [clickedIds, setClickedIds] = useState([]);

  // 3. score: The current score of the player.
  const [score, setScore] = useState(0);

  // 4. bestScore: The highest score achieved across all rounds.
  const [bestScore, setBestScore] = useState(0);

  // --- Game Logic: Handling Card Clicks ---
  const handleCardClick = (clickedCardId) => {
    // 1. Check if the clicked card's ID is already in the clickedIds array.
    if (clickedIds.includes(clickedCardId)) {
      // --- LOSS CONDITION ---
      // Card was clicked twice. Reset the game for this round.
      // Update best score if current score is higher.
      if (score > bestScore) {
        setBestScore(score);
      }
      // Reset score and clicked IDs. Keep the cards array as is (will be shuffled by useEffect).
      setScore(0);
      setClickedIds([]);
    } else {
      // --- WIN CONDITION ---
      // New card clicked. Increase score.
      const newScore = score + 1;
      setScore(newScore);
      // Add the new ID to the clickedIds array.
      const newClickedIds = [...clickedIds, clickedCardId];
      setClickedIds(newClickedIds);
      // Check for perfect score (optional win condition)
      if (newClickedIds.length === cards.length) {
        alert('Congratulations! You clicked all cards! Resetting game.');
        setBestScore(Math.max(newScore, bestScore));
        setScore(0);
        setClickedIds([]);
        // No need to manually shuffle here, useEffect will handle it.
    }
  }
        // Note: We do NOT shuffle cards here. We rely on the useEffect below to
    // shuffle after every click based on state changes.
  };

  // --- The Key useEffect Hook for Shuffling ---
  useEffect(() => {
    // This function will be called after every render triggered by a change in score or clickedIds.
    // We use a functional update for setCards. The parameter 'prevCards' represents the current state of cards.
    // We create a new shuffled array based on the *original* card data imported.
    // This ensures we always shuffle the same 12 cards, not an already shuffled version,
    // and it avoids needing 'cards' as a dependency.
    setCards((prevCards) => {
      // We shuffle a copy of the initialCardData.
      // Create a fresh copy to shuffle
      const arrayToShuffle = [...initialCardData];
      for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
      }
      return arrayToShuffle;
    });
  }, [score, clickedIds]); // Dependencies: shuffle whenever score or clickedIds changes.

  return (
    <div className="App">
      <header className="game-header">
        <h1>Memory Game</h1>
        <p>Try to click each card exactly once until all cards are clicked</p>
        <div className="score-board">
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </header>

      <main className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${clickedIds.includes(card.id) ? 'card-clicked' : ''}`}
            onClick={() => handleCardClick(card.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleCardClick(card.id);
            }}
            >
            {/* In a complete version, you would add an <img> tag here */}
            <div className="card-image-container">
              <img 
                src={card.image} 
                alt={card.name} 
                className="card-image" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=Image+Not+Found';
                }}
              />
            </div>
            <p className="card-name">{card.name}</p>
            </div>
        ))}
      </main>
    </div>
  );
}

export default App;
