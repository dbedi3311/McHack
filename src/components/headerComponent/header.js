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
              <Link to="/" style={{ textDecoration: 'none', color:'white'}}>Home</Link>
            </li>
            <li>
              <Link to="/Report">Report</Link>
            </li>
            <li className="last">
              <Link to="/Volunteer">Volunteer</Link>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Header;
