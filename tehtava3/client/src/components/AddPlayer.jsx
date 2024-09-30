import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddPlayer = () => {
  const { addPlayer } = useContext(GlobalContext);

  // State for the player form fields
  const [player, setPlayer] = useState({
    etunimi: "",
    sukunimi: "",
    kutsumanimi: "",
    syntymavuosi: "",
    paino: "",
    kuvalinkki: "",
    laji: "",
    saavutukset: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player);
    // Reset the form
    setPlayer({
      etunimi: "",
      sukunimi: "",
      kutsumanimi: "",
      syntymavuosi: "",
      paino: "",
      kuvalinkki: "",
      laji: "",
      saavutukset: "",
    });
  };

  return (
    <div className="container mt-4">
      <h3>Add Player</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="etunimi"
            value={player.etunimi}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="sukunimi"
            value={player.sukunimi}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input
            type="text"
            name="kutsumanimi"
            value={player.kutsumanimi}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Birth Year</label>
          <input
            type="date"
            name="syntymavuosi"
            value={player.syntymavuosi}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            name="paino"
            value={player.paino}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Link</label>
          <input
            type="url"
            name="kuvalinkki"
            value={player.kuvalinkki}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sport</label>
          <input
            type="text"
            name="laji"
            value={player.laji}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Achievements</label>
          <textarea
            name="saavutukset"
            value={player.saavutukset}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;
