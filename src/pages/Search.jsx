import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  useTitle(`Search result for ${queryTerm}`);

  const { data: movies, loading, error } = useFetch(apiPath, queryTerm);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          {/* Check if movies exist and is an array */}
          {movies &&
            Array.isArray(movies) &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default Search;
