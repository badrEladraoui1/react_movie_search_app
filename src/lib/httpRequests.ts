import axios from "axios";

export async function get_poplar_movies() {
  try {
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
    });
    return data;
  } catch (errror) {
    console.log("[errror] : ", errror);
  }
}
