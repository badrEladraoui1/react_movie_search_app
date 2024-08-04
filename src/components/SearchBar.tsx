import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <form className="flex gap-5 mb-5">
      <Input
        id="search_bar"
        name="movie_name"
        type="search"
        placeholder="SpiderMan"
        className="border-2 border-purple-500 rounded-xl"
      />
      <Button
        type="submit"
        className="bg-purple-800 rounded-xl hover:bg-purple-500"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
