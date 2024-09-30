// utils/formatDate.js

// Helper function to format the date to 'YYYY-MM-DD' for input fields
export const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2); // Add leading zero if needed
  const day = `0${date.getDate()}`.slice(-2); // Add leading zero if needed
  return `${year}-${month}-${day}`;
};
