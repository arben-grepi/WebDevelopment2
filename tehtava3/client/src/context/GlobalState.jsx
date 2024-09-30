import { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  players: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  async function getPlayers() {
    try {
      const res = await axios.get("/users");
      dispatch({
        type: "GET_PLAYERS",
        payload: res.data.data,
      });
      console.log("RES: " + res.data.data);
    } catch (err) {
      dispatch({
        type: "PLAYER_ERRORS",
        payload: err.response.data.error,
      });
    }
  }

  // Add Player
  async function addPlayer(player) {
    try {
      const res = await axios.post("/users", player);
      dispatch({
        type: "ADD_PLAYER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "PLAYER_ERRORS",
        payload: err.response.data.error,
      });
    }
  }

  async function updatePlayer(id, updatedPlayer) {
    try {
      const res = await axios.put(`/users/${id}`, updatedPlayer);
      dispatch({
        type: "UPDATE_PLAYER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "PLAYER_ERRORS",
        payload: err.response.data.error,
      });
    }
  }

  // Delete Player
  async function deletePlayer(id) {
    try {
      await axios.delete(`/users/${id}`);
      dispatch({
        type: "DELETE_PLAYER",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "PLAYER_ERRORS",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        players: state.players,
        error: state.error,
        loading: state.loading,
        getPlayers,
        addPlayer,
        updatePlayer,
        deletePlayer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
