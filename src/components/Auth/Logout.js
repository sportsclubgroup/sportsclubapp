import React from 'react';
import {NavLink} from 'reactstrap';
import {logout} from '../../actions/authActions';
import { connect } from 'react-redux';


export const Logout = ({ logout }) => {
    return (
      <>
        <div className="navbar_navigation-items">
              <ul>
              <li><NavLink onClick={logout} href="/" className="link">Logout</NavLink></li>
              </ul>
        </div>
      </>
    );
  };
  
  export default connect(null, { logout })(Logout);