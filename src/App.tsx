import "./App.css";
import { useMovies } from "./custom-hooks/queries";
import AppRouter from "./routes";

function App() {
  const { isPending, data, error } = useMovies({ page: "1" });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (data) console.log("movies: ", data);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
