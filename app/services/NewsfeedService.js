import axios from "axios";
const getNews = () => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=10d51466ea7d4047a56472d23d78785a"
    )
    .then((response) => {
      setNews(response.data.articles);
    });
};

export default getNews;
