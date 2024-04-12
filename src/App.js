import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import Categories from "./components/Categories";
import Upload from "./components/Upload";
import Footer from "./components/Footer";

import { SearchBar } from "./components/SearchBar";
import { SearchResultList } from "./components/SearchResultList";
import { useState } from "react";


function App() {

  const [results, setResults] = useState([]);

  const [activeTab, setActiveTab] = useState('search'); // Declaring activeTab state
  const [searchResults, setSearchResults] = useState([]); // Renamed results to searchResults

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App" id="body">
      <header id="header">
        <Navbar changeTab={changeTab} />
      </header>
      <main>
        {activeTab === 'search' && (
          <>
            <PageTitle />
            <div className="search-bar-container">
              <SearchBar setResults={setSearchResults} /> {/* Updated setResults to setSearchResults */}
              {searchResults && searchResults.length > 0 && <SearchResultList results={searchResults} />} {/* Updated results to searchResults */}
            </div>
          </>
        )}
        {/* Add other tabs and their corresponding content */}
        {activeTab === 'categories' && <Categories /> }
        {activeTab === 'upload' && <Upload />}
        <Footer />
      </main>
    </div>
  );
}

export default App;
