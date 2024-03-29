const axios = require("axios").default;
import {
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  TMDB_API_KEY,
  ENDPOINTS,
} from "../constants/Urls";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowMoviePlaying = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getMostPopular = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.MOST_POPULAR);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

export { getNowMoviePlaying, getPoster, getMostPopular };
