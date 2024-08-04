import { useEffect, useState } from "react";
import { get_poplar_movies } from "@/lib/httpRequests";

type useMoviesType = {};

const useMovies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        const results = await get_poplar_movies();
        setMovies(results);
      };
      getData();
    } catch (error) {
      console.log("error : ", error);
    }
  }, []);

  return <div>useMovies</div>;
};

export default useMovies;
