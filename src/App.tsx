import "./App.css";
import { useMovies } from "./custom-hooks/queries";

function App() {
  const { isPending, data, error } = useMovies({ page: "1" });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (data) console.log("movies: ", data);
  return (
    <>
      <div>Movie Browser app</div>
    </>
  );
}

export default App;
