import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {NavLink,useHistory} from 'react-router-dom';
import './Fixture.css';

function Fixtures() {
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/match_details`; 
      history.push(path);
    }

    const fixturesInfo= [
        {date:"January 2019",day:"Sunday 20",time:"11.30 Europe/Helsinki",teams:"Helsinki Cricket Club  Vs Vantaa CC",tournamentName:"Finnish Premier League",location:"kerava national cricket ground"},
        {date:"January 2019",day:"Sunday 20",time:"11.30 Europe/Helsinki",teams:"Helsinki Cricket Club  Vs Vantaa CC",tournamentName:"Finnish Premier League",location:"kerava national cricket ground"},
        {date:"February 2020",day:"Monday 13",time:"13.15 Europe/Helsinki",teams:"Greater Helsinki CC Vs SKK Rapids",tournamentName:"Cricket Finland Twenty20 - Div 1",location:"käpylän liikuntapuisto-Main"},
        {date:"March 2020",day:"Friday 15",time:"12.45 Europe/Helsinki",teams:"FinCricket Club Vs Otaniemi KK",tournamentName:"Cricket Finland Twenty20 - Div 1",location:"käpylän liikuntapuisto-Main"},
        {date:"April 2020",day:"Saturday 29",time:"11.15 Europe/Helsinki",teams:"Greater Helsinki CC Vs SKK Rapids",tournamentName:"Finnish Premier League",location:"kerava national cricket ground"},
        {date:"May 2020",day:"Wednesday 19",time:"14.15 Europe/Helsinki",teams:"Club ‘71 Kriketti Vs Turku United CC",tournamentName:"Cricket Finland Twenty20 - Div 1",location:"käpylän liikuntapuisto-Main"},
       
    ];

    const renderGrid = (props,index) => {

        return (
            <div className="body">
                
                <h4>{props.date}</h4>
            <div key={index} className="grid" shadow="true">
                
            <Row className="row">
                <Col className="time-col">
               
               <h6>{props.day}</h6>
              <p>{props.time}</p>
              
              
              </Col>
              
             <Col className="teams">
             <h6 className="team_name">{props.teams}</h6>
             </Col>
            <Col>
            
        <h6> {props.tournamentName}</h6>
        <p>{props.location}</p>
            </Col>
            <Col className="btn-col">
              <NavLink to="/match_details">
            <Button type="submit" className="match-details_btn" onClick={routeChange}>Match Details </Button>
            </NavLink> 
            </Col>
            </Row>
        </div>
        </div>
        )
      }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Fixtures</h2>
            <Container fluid="md">
             
             {fixturesInfo.map(renderGrid)}
              
            </Container>
        </div>
    )
}

export default Fixtures