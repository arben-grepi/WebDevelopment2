import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state (fixed the typo)
const initialState = {
  users: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // Use corrected 'initialState'

  //Actions
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
