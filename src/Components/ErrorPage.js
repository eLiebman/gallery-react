import React from 'react';

// ErrorPage Components
import Header from './Header';

const ErrorMessage = ({ search }) => {
  return(
    <div>
      <Header search={search} />
      <h3>404 - Page Not Found</h3>
      <p>That url doesn't exist!</p>
    </div>
  );
}

export default ErrorMessage;
