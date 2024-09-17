import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

interface User {
  id: number;
  name: string;
  [key: string]: any;
}

interface SearchResultsListProps {
  results: User[];
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
}) => {
  return (
    <div className="results-list">
      {results.map((result) => (
        <SearchResult result={result.name} key={result.id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
