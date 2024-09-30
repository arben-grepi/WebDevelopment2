import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { formatDateForInput } from "./utils/formatDate";

const PlayerUpdateInfo = ({ player, onCancel }) => {
  const [editPlayer, setEditPlayer] = useState({
    ...player,
    syntymavuosi: formatDateForInput(player.syntymavuosi),
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  // Function to update the player
  const updatePlayer = async (id, updatedPlayerData) => {
    try {
      const res = await axios.put(`/users/${id}`, updatedPlayerData);
      console.log("Updated player data:", res.data.data);
      onCancel(); // Exit edit mode after successful update
    } catch (err) {
      console.error("Error updating player:", err.response.data.error);
    }
  };

  // Handle form submission for update
  const handleUpdate = (e) => {
    e.preventDefault();
    updatePlayer(player.id, editPlayer); // Call updatePlayer with the current player's ID
  };

  return (
    <form onSubmit={handleUpdate}>
      {/* Form fields for editing player info */}
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="etunimi"
          value={editPlayer.etunimi}
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
          value={editPlayer.sukunimi}
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
          value={editPlayer.kutsumanimi}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Birth Year</label>
        <input
          type="date"
          name="syntymavuosi"
          value={editPlayer.syntymavuosi}
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
          value={editPlayer.paino}
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
          value={editPlayer.kuvalinkki}
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
          value={editPlayer.laji}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Achievements</label>
        <textarea
          name="saavutukset"
          value={editPlayer.saavutukset}
          onChange={handleChange}
          className="form-control"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary me-2">
        Confirm Update
      </button>
      <button type="button" onClick={onCancel} className="btn btn-secondary">
        Cancel
      </button>
    </form>
  );
};

PlayerUpdateInfo.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    etunimi: PropTypes.string.isRequired,
    sukunimi: PropTypes.string.isRequired,
    kutsumanimi: PropTypes.string.isRequired,
    syntymavuosi: PropTypes.string.isRequired,
    paino: PropTypes.string.isRequired,
    kuvalinkki: PropTypes.string.isRequired,
    laji: PropTypes.string.isRequired,
    saavutukset: PropTypes.string.isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PlayerUpdateInfo;
