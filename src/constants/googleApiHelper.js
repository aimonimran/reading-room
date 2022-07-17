import { GOOGLE_FETCH_CONFIG } from "./constants";
import axios from "axios";

export const getGoogleBooksApiKey = () => {
  return process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
};

export const fetchBooksFromGoogle = (searchQuery = "") => {
  return axios.get(
    `${
      GOOGLE_FETCH_CONFIG.base_url
    }?q=${searchQuery}&key=${getGoogleBooksApiKey()}&maxResults=${
      GOOGLE_FETCH_CONFIG.maxResults
    }`
  );
};
