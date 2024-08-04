import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <main>
      <h1 className="text-center p-10 text-5xl font-mono m-3">
        <span className="text-purple-500">Movie</span>{" "}
        <span className="text-purple-400">search</span>{" "}
        <span className="text-purple-300">page</span>
      </h1>
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div>
        <MovieList />
      </div>
    </main>
  );
}
