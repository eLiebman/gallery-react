import React from 'react';

// Header Components
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ search, updateSearchTerm }) => {
  return(
    <div>
      <h1>Search For Images!</h1>
      <Nav />
      <SearchForm search={search} updateMasterSearchTerm={updateSearchTerm} />
    </div>
  );
}

export default Header;
