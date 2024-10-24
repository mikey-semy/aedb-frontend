import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {

  return (
    <Link 
      id='logo' 
      className="logo-link" 
      to="/"
    >
      <span className="logo">
        aedb
      </span>
    </Link>
  );
};

export default Logo;