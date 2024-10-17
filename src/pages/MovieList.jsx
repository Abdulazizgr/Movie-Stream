import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

const MovieList = ({ apiPath,title }) => {
  const { data: movies, loading, error } = useFetch(apiPath);

  useTitle(title);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {/* Check if movies exist and is an array */}
          {movies &&
            Array.isArray(movies) &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
