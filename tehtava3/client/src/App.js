import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { Heading } from "./components/Heading";
import { ListOfPlayers } from "./components/ListOfPlayers";
import AddPlayer from "./components/AddPlayer";
import React, { useState } from "react";

function App() {
  const [showAddPlayer, setShowAddPlayer] = useState(false); // State for toggling AddPlayer visibility

  const toggleAddPlayerForm = () => {
    setShowAddPlayer((prev) => !prev); // Toggle the form visibility
  };

  return (
    <GlobalProvider>
      <div className="container p-5 my-5 border">
        <Heading />

        {/* Button to toggle AddPlayer component */}
        <button className="btn btn-dark mb-3" onClick={toggleAddPlayerForm}>
          {showAddPlayer ? "Hide Add Player Form" : "ADD A NEW PLAYER"}
        </button>

        {/* Conditionally render AddPlayer component */}
        {showAddPlayer && <AddPlayer />}

        <ListOfPlayers />
      </div>
    </GlobalProvider>
  );
}

export default App;
