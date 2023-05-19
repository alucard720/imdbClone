const axios = require("axios").default;

import {
  TMDB_DATABASE_URL,
  TMDB_DATABASE_IMAGE,
  TMDB_API_KEY,
  END_POINTS,
} from "../constants/Urls";

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_DATABASE_URL,
  params: { api_key: TMDB_API_KEY },
});

const getMovieNowPlaying = () => TMDB_HTTP_REQUEST.get(END_POINTS.NOW_PLAYING);

const getPoster = (path) => `${TMDB_DATABASE_IMAGE}/original${path}`;

export { getMovieNowPlaying, getPoster };
