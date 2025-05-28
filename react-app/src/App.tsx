import React, { useState } from "react";
import Card from "./components/Card";
import FetchPokemon from "./components/FetchPokemon";
import pokemones from './components/pokemon.json';
import ShowFighters from "./components/ShowFighters";
import './components/styles.css'


interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [rivalSelected, setSelectedRival] = useState<Pokemon | null>(null);
  const [winner, setWinner] = useState<Pokemon | null>(null);

  // Función para seleccionar un rival aleatorio
  const handleRandomRivalSelection = (pokemonSelected: Pokemon) => {
    const allPokemon = pokemones.pokemon;
    if (allPokemon.length > 0) {
      let randomRival: Pokemon | null = null;
      while (!randomRival || randomRival.name === pokemonSelected.name) {
        const randomIndex = Math.floor(Math.random() * allPokemon.length);
        randomRival = allPokemon[randomIndex];
      }
      setSelectedRival(randomRival);
    }
  };

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    handleRandomRivalSelection(pokemon);
    setWinner(null); // Reiniciar el ganador
  };


  const handleBattle = async () => {
    if (!selectedPokemon || !rivalSelected) return;
    try {
      const response = await fetch('http://localhost:3000/api/battle', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          peleador: selectedPokemon,
          rival: rivalSelected,
        }),
      });
      const data = await response.json();
      setWinner(data.winner);
    } catch (error) {
      alert('Error al simular la batalla');
    }
  };

  return (
    <Card>
      <h1>Battle of Pokemon</h1>
      <div className="container text-center">
        <h2>Select your Pokemon</h2>

        {/* Componente de selección de Pokémon */}
        <FetchPokemon onSelect={handlePokemonSelect} />

        {/* Mostrar los Pokémon seleccionados y rival */}
        {selectedPokemon && rivalSelected && (
          <ShowFighters
            selectedPokemon={selectedPokemon}
            rivalSelected={rivalSelected}
          />
        )}

        {/* Botón para iniciar batalla */}
        {selectedPokemon && rivalSelected && (
          <button 
            style={{ marginTop: "-95%", backgroundColor:"green", color:"white" }} 
            onClick={handleBattle}
            disabled={!selectedPokemon || !rivalSelected}
          >
            Start Battle
          </button>
        )}

        <div className="Ganador">
          {/* Mostrar el resultado de la batalla */}
          {winner && <h3>{winner.name} wins!</h3>}  
        </div>
        
      </div>
    </Card>
  );
}

export default App;

