import apiClient from "./api-client";
import { CanceledError } from "axios";

const endPoint = "/sanakirja/";

// Function to get a word by its Finnish form
export const getWord = async (annaSana: string) => {
  try {
    const response = await apiClient.get<string>(`${endPoint}${annaSana}`);
    return response.data;
  } catch (err) {
    if (err instanceof CanceledError) return; // Handle request cancellation

    return err;
  }
};

// Function to post new words
export const postWords = async (wordData: {
  suomi: string;
  englanti: string;
}) => {
  try {
    const response = await apiClient.post<{ message: string }>(
      endPoint,
      wordData
    );
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    if (err instanceof CanceledError) return; // Handle request cancellation
    console.log(err.message);
    return err.message;
  }
};
