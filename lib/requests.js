const API_KEY = "5c2f2cc8ccacdc68eda56dd1744cfc17";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchTopDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests