import React from 'react';

// Header Components
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = props => {
  return(
    <div>
      <Nav />
      <SearchForm search={props.search}/>
    </div>
  );
}

export default Header;
