import Container from "react-bootstrap/esm/Container";
import { SearchResult } from "./SearchResult";

function SearchResultList({ results }) {
  return (
    <Container fluid className="search-results-container">
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
    </Container>
  );
}

export {SearchResultList};
