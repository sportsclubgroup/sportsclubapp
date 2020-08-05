import React from 'react';
import { Card} from 'react-bootstrap'

import './Players.css'

const Players=()=>{
    
      const playerInfo = [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxYCdHZTvRtjxCf3kasjSotc9tcqExg9BDeA&usqp=CAU",
        name: "Matti",
        text: "Right Handed Batsman",
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqcbxyqJCi6wdqrkwyTk6neEVCF3biG36M7Q&usqp=CAU",
        name: "Pauli",
        text: "All Rounder",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_qMNhsfilyRDzD-S_BAR31mTJHBxFe3nEdQ&usqp=CAU",
        name: "Warner",
        text: "Left Handed Batsman",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEiN2lzlvLyFKcdkqPt8W7DOvUKntewcL3ow&usqp=CAU",
        name: "Anwar",
        text: "Left Handed Batsman",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_qMNhsfilyRDzD-S_BAR31mTJHBxFe3nEdQ&usqp=CAU",
        name: "Gayle",
        text: "All Rounder",
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqcbxyqJCi6wdqrkwyTk6neEVCF3biG36M7Q&usqp=CAU",
        name: "Waquar",
        text: "Rightarm Fast Bowler",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuH09A3DO1gD0IfkA-7d6E96f5jgNUe64cyw&usqp=CAU",
        name: "Flintoff",
        text: "All Rounder",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCI56gF4mOKtbYsg8T_X16UYceNM3QHEkL2g&usqp=CAU",
        name: "Ambrose",
        text: "Right Arm Fast Bowler",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqcbxyqJCi6wdqrkwyTk6neEVCF3biG36M7Q&usqp=CAU",
        name: "Dhoni",
        text: "Wicket Keeper",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxYCdHZTvRtjxCf3kasjSotc9tcqExg9BDeA&usqp=CAU",
        name: "Shane Warn",
        text: "Leg Spinner",
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqcbxyqJCi6wdqrkwyTk6neEVCF3biG36M7Q&usqp=CAU",
        name: "Murali",
        text: "Off Spinner",
      },
      {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuH09A3DO1gD0IfkA-7d6E96f5jgNUe64cyw&usqp=CAU",
        name: "Hasan",
        text: "All Rounder",
      }
      
    ]
    
  
  const renderCard = (card, index) => {
    return (
     // <CardDeck>
     <div className="container">
     
     

  <Card>
    <Card.Img variant="top" src={card.image}/>
    <Card.Body>
      <Card.Title>{card.name}</Card.Title>
      <Card.Text>
        {card.text}
      </Card.Text>
    </Card.Body>
    
  </Card>
  

  </div>
  



   
//</CardDeck>
    );
  };

  return <div className="grid">{playerInfo.map(renderCard)}</div>;
}



export default Players;