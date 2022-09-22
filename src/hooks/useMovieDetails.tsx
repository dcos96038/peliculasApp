import {useEffect, useState} from "react";

import movieDB from "../api/movieDB";
import {Cast, MovieCredits} from "../interfaces/creditsInterface";
import {FullMovieDetails} from "../interfaces/movieInterface";

interface MovieDetails {
  isLoading: boolean;
  fullMovieDetails?: FullMovieDetails;
  cast: Cast[];
}

const useMovieDetails = (movieID: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovieDetails: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<FullMovieDetails>(`/${movieID}`);
    const movieCreditsPromise = movieDB.get<MovieCredits>(`/${movieID}/credits`);

    const [movieDetailsResp, movieCreditsResp] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      isLoading: false,
      fullMovieDetails: movieDetailsResp.data,
      cast: movieCreditsResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};

export default useMovieDetails;
