import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <div className="header-custom">
    <div className="container">
      <div className="header-custom__block">
        <button type="button" className="ui icon button basic">
          <i className="home icon" />
        </button>
        <Link to="/fullversion"><button type="button" className="ui basic button">
          <i className="clipboard outline icon" />
          Boards
        </button>
        </Link>
        <div>
          <div className="ui icon input small">
          <input type="text" placeholder="Search..." />
           <i className="search icon black" />
          </div>
        </div>
      </div>
      <Link to="/home"><div className="header-custom__block">
        <h1 className="header-custom__block__title">DynamicNotes</h1>
      </div></Link>
      <div className="header-custom__block-block">
        <button type="button" className="ui icon button basic">
          <i className="plus icon" />
        </button>
        <Link to="/fullversion">  <button type="button" className="ui icon button basic">
          <i className="info circle icon" />
        </button>
        </Link>
        <Link to="/fullversion"><button type="button" className="ui icon button basic">
          <i className="bell icon" />
        </button>
        </Link> 
        <Link to="/fullversion"> <button type="button" className="ui icon button basic">
          <i className="user circle icon" />
        </button></Link>
      </div>
    </div>
  </div>
);

export default Header;
