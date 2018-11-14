import React from 'react';

// Header Components
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ search }) => {
  return(
    <div>
      <Nav />
      <SearchForm search={search}/>
    </div>
  );
}

export default Header;
