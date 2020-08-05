import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/logo/logo.svg'
import './Navbar.css';
import Logout from '../Auth/Logout';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class navbar extends Component {

    constructor(props, auth) {
        super(props);

    }

    static propTypes = {
        auth: PropTypes.object.isRequired

    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <>
                <div className="navbar_navigation-items">
                    <NavLink to ="/PlayerProfile"></NavLink>                  
                    <Logout />
                </div>

            </>
        );
        const guestLinks = (
            <>
                <div>
                    <div className="navbar_navigation-items"><ul>
                        <li><NavLink to="/login" className="link">Login</NavLink></li>
                    </ul>
                    </div>
                </div>
            </>
        );


        return (
            <>

                <div className="navbar">

                    <nav className="navbar_navigation">
                        <div className="navbar_toggle-button">
                            <DrawerToggleButton click={this.props.drawerClickHandler} />
                        </div>
                        <div className="navbar_logo"><Link to="/"><img src={Logo} alt="logo"></img></Link></div>
                        {
                            user ? <div className="username">
                                {`Welcome ${user.name}`} <Redirect to='../Auth/PlayerProfile/id=1' />
                            </div> : ''
                        }
                        <div className="spacer-b" />
                        <div className="navbar_navigation-items">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/club">Club</NavLink></li>
                                <li><NavLink to="/fixture">Fixture</NavLink></li>
                                <li><NavLink to="/players">Players</NavLink></li>
                                <li><NavLink to="/gallery">Gallery</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>

                            </ul>

                        </div>

                        {isAuthenticated ? authLinks : guestLinks}

                    </nav>

                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(navbar);