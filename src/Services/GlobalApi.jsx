import axios from 'axios';


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d1274131829332d523bf82ed33260c7d';


// https://api.themoviedb.org/3/trending/movie/day?api_key=d1274131829332d523bf82ed33260c7d

const getTrendingVideos = axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=d1274131829332d523bf82ed33260c7d');

const getMovieByGenreId = (id) => 
axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}

