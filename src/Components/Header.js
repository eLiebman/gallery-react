import React from 'react';

// Header Components
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ search }) => {
  return(
    <div>
      <h1>Search For Images!</h1>
      <Nav />
      <SearchForm search={search}/>
    </div>
  );
}

export default Header;
