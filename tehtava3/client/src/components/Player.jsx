import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { formatDateForInput } from "./utils/formatDate"; // Import the helper function
import { GlobalContext } from "../context/GlobalState"; // Import the context

const Player = ({ player }) => {
  const { updatePlayer, deletePlayer } = useContext(GlobalContext); // Get functions from context

  const [isEditing, setIsEditing] = useState(false);
  const [editPlayer, setEditPlayer] = useState({
    ...player,
    syntymavuosi: formatDateForInput(player.syntymavuosi),
  });

  const [updatedPlayer, setUpdatedPlayer] = useState(player);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatePlayer(player.id, editPlayer);
      setUpdatedPlayer(editPlayer);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating player:", err);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditPlayer({
      ...player,
      syntymavuosi: formatDateForInput(player.syntymavuosi),
    });
  };

  const handleDelete = () => {
    deletePlayer(player.id); // Call deletePlayer function from context
  };

  useEffect(() => {
    setEditPlayer({
      ...updatedPlayer,
      syntymavuosi: formatDateForInput(updatedPlayer.syntymavuosi),
    });
  }, [updatedPlayer]);

  if (!isEditing) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">
            {updatedPlayer.etunimi} {updatedPlayer.sukunimi}{" "}
            <small
              className="text-muted fst-italic"
              style={{ fontSize: "0.75rem" }}
            >
              {updatedPlayer.kutsumanimi}
            </small>
          </h2>

          <img
            src={updatedPlayer.kuvalinkki}
            alt={`${updatedPlayer.etunimi} ${updatedPlayer.sukunimi}`}
            className="img-fluid mb-3"
            style={{ width: "200px" }}
          />
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Birth Year:</strong>
                </td>
                <td>{new Date(updatedPlayer.syntymavuosi).toDateString()}</td>
              </tr>
              <tr>
                <td>
                  <strong>Weight:</strong>
                </td>
                <td>{updatedPlayer.paino} kg</td>
              </tr>
              <tr>
                <td>
                  <strong>Sport:</strong>
                </td>
                <td>{updatedPlayer.laji}</td>
              </tr>
              <tr>
                <td>
                  <strong>Achievements:</strong>
                </td>
                <td>{updatedPlayer.saavutukset}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-3">
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-warning me-2"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-danger btn-sm" // Add Bootstrap classes for styling
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">Edit Player Information</h2>
        <form onSubmit={handleUpdate}>
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
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

// Define PropTypes for the Player component
Player.propTypes = {
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
};

export default Player;
