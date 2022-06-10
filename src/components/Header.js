// use rfce tab to create a plain component
import React from 'react'
import {Link} from 'react-router-dom';

function Header () {
return (
    <header>
      <nav>
        <h1 className="branding">
          Nor*Cal Beaches
        </h1>
        <div className="navigation">
          <Link className="button" to="/beaches">
            All Beaches
          </Link>
          <Link className="button" to="/projects/new">
            Add Beach
          </Link>
        </div>
      </nav>
    </header>
  );
}


export default Header;
