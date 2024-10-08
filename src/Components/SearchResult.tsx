import React from "react";
import "./SearchResult.css";

interface SearchResultProps {
  result: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={() => alert(`You selected ${result}!`)}>
      {result}
    </div>
  );
};

export default SearchResult;
