const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const NEWS_BASE_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=10d51466ea7d4047a56472d23d78785a";

const TMDB_API_KEY = "443bfa322b4a696a3a24da50e476b6f6";

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  MOST_POPULAR: "/movie/top_rated",
  UPCOMING_MOVIES: "/movie/upcoming",
  NEWS_RELEASE: "",
};

export { TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS };
