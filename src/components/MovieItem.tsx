import mac_jpg from "../assets/mac.jpg";

const MovieItem = () => {
  return (
    <section className="inline-flex flex-col items-center gap-3 border-2 border-purple-200 rounded-xl p-5">
      <h1 className="font-mono">MAC</h1>
      <img
        src={mac_jpg}
        width={300}
        height={300}
        alt="movie_image"
        className="rounded-xl border-2 border-purple-500"
      />
    </section>
  );
};

export default MovieItem;
