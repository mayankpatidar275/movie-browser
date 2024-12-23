import "./App.css";
import AppRouter from "./routes";
import { FilterProvider } from "./context/FilterContext/FilterProvider";

function App() {
  return (
    <>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </>
  );
}

export default App;
