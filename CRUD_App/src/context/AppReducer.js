export default (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state, // Preserve other state properties
        users: [action.payload, ...state.users], // Add the new user
      };

    case "EDIT_USER": {
      const updatedUser = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser; // Replace the old user with the updated user
        }
        return user; // Return the unchanged user
      });

      return {
        users: updatedUsers, // Update the users property
      };
    }

    case "REMOVE_USER": {
      return {
        ...state, // Preserve other state properties
        users: state.users.filter((u) => u.id !== action.payload), // Filter out the user
      };
    }

    default:
      return state; // Return the current state if no actions match
  }
};
