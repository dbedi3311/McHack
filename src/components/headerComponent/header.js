import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        <i class="glyphicon glyphicon-refresh"></i>
        TRASHTRACKER
        </div>
        <nav>

          <ul>
            <li className="first">
              <Link to="/" style={{ textDecoration: 'none'}}>Home</Link>
            </li>
            <li>
              <Link to="/Report" style={{ textDecoration: 'none'}}>Report</Link>
            </li>
            <li className="last">
              <Link to="/Volunteer" style={{ textDecoration: 'none'}}>Volunteer</Link>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Header;
