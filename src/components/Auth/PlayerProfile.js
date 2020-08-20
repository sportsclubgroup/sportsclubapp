import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './PlayerProfile.css';
// import './Grid.css'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class PlayerProfile extends Component {
 
  static propTypes={
      auth: PropTypes.object.isRequired
} 
    render(){
      const {isAuthenticated, user} = this.props.auth;
    return (
      <>
        {isAuthenticated ?(
          <div>
      <div className="p-container">
        <div className="content">
      
          <div className="row">
            <div className="column1 col-lg-5 col-sm-12">
              <div className="player-img">
                <img className="img" src="https://img-cdn.hltv.org/playerbodyshot/RkBcD0hXW4RB_JMLJD9Q8d.png?ixlib=java-2.1.0&w=400&s=004587eea44ffabe561b6be6a264d556" alt="profile_image"/>
                    <h3 className="name">{user.name}</h3>
                    <p className="name2">{user.email}</p>
                <ul className="social-icons"> 
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                      </li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-twitter" aria-hidden="true"></i> </a>
                          </li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-instagram" aria-hidden="true"></i></a>
                          </li>
                </ul>                
              </div>
             
             </div>
              <div className="column2 col-lg-7 col-sm-12">
                <div className="player_profile">
                  <div className="player_info">

                    <h3 style={{borderBottom: "1px solid #ddd",paddingBottom: "20px",fontSize:"22px"}}>Player profile</h3>
                        <Table className="player-profile__table">
                          <tbody>
                            <tr>
                              <td><span>Date of Birth</span></td>
                              <td>29 April 1993</td>
                             </tr>
                            <tr>
                              <td><span>Nationality	</span></td>
                              <td>Country name</td>
                            </tr>
                            <tr>
                               <td><span>Club Debut</span></td>
                                <td>January 21, 2017</td>
                            </tr>
                          </tbody>
                        </Table>
                    </div>


                    <div className="career_info">
                              <h3 style={{borderBottom: "1px solid #ddd",paddingBottom: "20px",fontSize:"22px",color: "#101010",fontFamily: "Fira Sans!important"}}>Career Information</h3>
                          <Table className="player-profile__table">
                            <tbody>
                              <tr>
                                <td><span>Macthes</span></td>
                                <td>12 matches</td>
                              </tr>
                              <tr>
                                <td><span>Runs</span>	</td>
                                <td>320 runs</td>
                              </tr>
                              <tr>
                                <td><span>Wickets</span></td>
                                <td>0 wickets</td>
                              </tr> 
                              <tr>
                                <td><span>Role</span>	</td>
                                <td>Wicketkeeper batsman</td>
                              </tr>
                              <tr>
                                <td><span>Batting Style</span>	</td>
                                <td>Right-handed</td>
                              </tr>
                              <tr>
                                <td><span>Bowling Style</span>	</td>
                                <td>Right-arm medium</td>
                              </tr>
                            </tbody>
                          </Table>
                      </div>
                </div>
             </div>
          </div>
        
        

        </div>


      </div>

   

      <section className="player-stats ">
                 <div className="player-stats__heading"> 
                    <h4>Batting and Fielding Stats</h4></div>
                 <div className="player-stats__table_bats">
                     <Table className="player-stats__table" size="md" responsive>
                         <thead>
                            <tr>
                              <th></th>
                              <th>Mat</th>
                              <th>Inn</th>
                              <th>No</th>
                              <th>100s</th>
                              <th>50s</th>
                              <th>4s</th>
                              <th>6s</th>
                              <th>HS</th>
                              <th>Runs</th>
                              <th>Ave</th>
                              <th>BF</th>
                              <th>SR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">Test</h4></div></td>
                                <td>8</td>
                                <td>8</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>30</td>
                                <td>7</td>
                                <td>83</td>
                                <td>285</td>
                                <td>35.63</td>
                                <td>329</td>
                                <td>86.63</td>
                            </tr>
                            <tr>
                              <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">ODI</h4></div></td>
                              <td>8</td>
                                <td>8</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>30</td>
                                <td>7</td>
                                <td>83</td>
                                <td>285</td>
                                <td>35.63</td>
                                <td>329</td>
                                <td>86.63</td>
                            </tr>
                            <tr>
                              <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">T20I</h4></div></td>
                              <td>8</td>
                                <td>8</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>30</td>
                                <td>7</td>
                                <td>83</td>
                                <td>285</td>
                                <td>35.63</td>
                                <td>329</td>
                                <td>86.63</td>
                            </tr>
                          </tbody>
                    </Table>
                  </div> 

                  <div className="player-stats__table_bowling">
                  <div className="player-stats__heading"> 
                    <h4> Bowling Stats</h4></div>
                  
                      <Table className="player-stats__table" size="md" responsive> 
                          <thead>
                                <tr>
                                  <th></th>
                                  <th>Mat</th>
                                  <th>Inn</th>
                                  <th>Balls</th>
                                  <th>Runs</th>
                                  <th>WKTS</th>
                                  <th>4W</th>
                                  <th>10W</th>
                                  <th>BBI</th>
                                  <th>Ave</th>
                                  <th>SR</th>
                                  <th>Econ</th>
                                </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">Test</h4></div></td>
                                    <td>8</td>
                                    <td>5</td>
                                    <td>295</td>
                                    <td>190</td>
                                    <td>20</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4/6</td>
                                    <td>9.50</td>
                                    <td>14.75</td>
                                    <td>3.86</td>
                                  </tr>
                                  <tr>
                                    <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">ODI</h4></div></td>
                                    <td>8</td>
                                    <td>5</td>
                                    <td>295</td>
                                    <td>190</td>
                                    <td>20</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4/6</td>
                                    <td>9.50</td>
                                    <td>14.75</td>
                                    <td>3.86</td>
                                  </tr>
                                  <tr>
                                    <td><div className="player-stats__table-match-type"><h4 className="player-stats__table-match-text">T20I</h4></div></td>
                                    <td>8</td>
                                    <td>5</td>
                                    <td>295</td>
                                    <td>190</td>
                                    <td>20</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4/6</td>
                                    <td>9.50</td>
                                    <td>14.75</td>
                                    <td>3.86</td>
                                  </tr>
                            </tbody>
                      </Table>
                  </div>    
        </section></div>)
        :null}
    
          
 </>
    )
}
}

const mapStateToProps = state => ({
  auth: state.auth
  }); 
  
// export default PlayerProfile;
export default connect(mapStateToProps,null) (PlayerProfile);