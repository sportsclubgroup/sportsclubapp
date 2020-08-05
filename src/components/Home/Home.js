import React, { Component } from 'react';
import './Home.css';
import Ground from '../../assets/background/hero-1.jpg';
import News from './News';
import NextMatch from './Match update/Nextmatch';
import Ranking from './Ranking/Ranking';
import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  const Home = (props) => { 
class Home extends Component {
    constructor(props, auth) {
        super(props);
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {

        const { isAuthenticated } = this.props.auth;

        const authLinks = (
            <>
               <div className="set-bg">
                <img src={Ground} alt="background"></img>
                <div className="h-container">
                    <div><h4>15 June 2020 / 9:00 AM</h4></div>
                    <div><h2>Tampere Sports Club VS Helsinki Sports Club</h2></div>
                </div>

                <span> <News /> </span>
                <div> <NextMatch /> </div>
                <div> <Ranking /> </div>
            </div>

            </>
        );
        const guestLinks = (
            <>
                <div className="set-bg">
                <img src={Ground} alt="background"></img>
                <div className="h-container">
                    <div><h4>15 June 2020 / 9:00 AM</h4></div>
                    <div><h2>Tampere Sports Club VS Helsinki Sports Club</h2></div>
                </div>

                <div className="btn-reg"><Button color="success" onClick={() => { this.props.history.push('/Signup'); }}>Join Our Club</Button></div>

                <span> <News /> </span>
                <div> <NextMatch /> </div>
                <div> <Ranking /> </div>
            </div>
            </>
        );

        return (
                <>
                {isAuthenticated ? authLinks : guestLinks}
                </>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(Home);