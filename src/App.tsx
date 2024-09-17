import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar />
          <div>search Bar results</div>
        </div>
      </div>
    </>
  );
}

export default App;
