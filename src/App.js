import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
// import SearchBar from "./components/SearchBar";

import { SearchBar } from "./components/SearchBar";
import { SearchResultList } from "./components/SearchResultList";
import { useState } from "react";

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App" id="body">
      <header id="header">
        <Navbar />
      </header>
      <main>
        <PageTitle />
        <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultList results={results} />}
      </div>
      </main>
    </div>
  );
}

export default App;
