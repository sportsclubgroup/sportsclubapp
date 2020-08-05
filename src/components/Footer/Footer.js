import React from 'react';
import "./Footer.css";
import Logo from "../../assets/logo/logo.svg"
import Ground from "../../assets/ground_map/map.jpg"

const Footer = () => { 
    return (
        <div className="footer">
        <div className="footer-content">
            <div className="left-section">
                   <div><img src={Logo} alt='Logo'></img></div><div><h5>Tampere Sports Club Ry</h5></div>
                    <div>(+358) 40 725 306 4</div>
                    <div>info@gmail.com</div>
            </div>
                <div className="middle-section"><h5>Quick Links</h5>
                <div className="footer_navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/club">Club</a></li>
                        <li><a href="/fixture">Fixture</a></li>
                        <li><a href="/players">Players</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="right-section"><div><h5>Home Ground Map</h5></div><a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/FWzKQPqTcn4tjFjCA"><img alt="Location on Map" src={Ground} title="Location on Map"></img></a></div>
                <div className="sm-icons"><h5>Follow us on</h5>
                <ul>
                    <li><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-whatsapp" aria-hidden="true"></i></li>
                        <li><i className="fa fa-youtube-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                </ul>
            </div>
            </div>
            <div className="bottom-section"><p>&copy;{new Date().getFullYear()} TSC INC | All rights reserverd | Terms of service | Privacy</p></div>
        </div>
    );
}
export default Footer;