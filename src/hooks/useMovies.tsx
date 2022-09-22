import {useEffect, useState} from "react";

import movieDB from "../api/movieDB";
import {MovieDBResponse, Movies} from "../interfaces/movieInterface";

interface MovieState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

const useMovies = () => {
  const [movieState, setMovieState] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const nosPlayingPromise = movieDB.get<MovieDBResponse>("/now_playing");
      const popularPromise = movieDB.get<MovieDBResponse>("/popular");
      const topRatedPromise = movieDB.get<MovieDBResponse>("/top_rated");
      const upcomingPromise = movieDB.get<MovieDBResponse>("/upcoming");

      const promisesResponses = await Promise.all([
        nosPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMovieState({
        nowPlaying: promisesResponses[0].data.results,
        popular: promisesResponses[1].data.results,
        topRated: promisesResponses[2].data.results,
        upcoming: promisesResponses[3].data.results,
      });

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...movieState, isLoading};
};

export default useMovies;
