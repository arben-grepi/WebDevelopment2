const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_PLAYERS":
      return {
        ...state,
        loading: false,
        players: action.payload,
      };
    case "ADD_PLAYER":
      return {
        ...state,
        players: [...state.players, action.payload], // Add new player to the list
      };
    case "UPDATE_PLAYER":
      return {
        ...state,
        players: state.players.map(
          (player) =>
            player.id === action.payload.id ? action.payload : player // Update specific player
        ),
      };
    case "DELETE_PLAYER":
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload), // Remove player by id
      };
    case "PLAYER_ERRORS":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
