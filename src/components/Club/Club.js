import React from "react";
import "./Club.css";
import Ground from "../../assets/background/hero-1.jpg";
const Club = () => {
  return (
    <div className="set-bg">
      <img src={Ground} alt="background"></img>
      <div className="h-tag">
        <div>
          <h2>CLUB</h2>
        </div>
      </div>
      <div className="aboutus">
        <h1>ONE CLUB FOR ALL</h1>
        <p>Learn about our Club and the board</p>
      </div>
      <div className="history">
        <h1>Our History</h1>
        <p>
          Most of members of this game originate from Australia, India,
          Pakistan, South Africa and the UK, however cricket is likewise on the
          ascent in different nations everywhere throughout the world. The
          International Cricket Council (ICC) distinguished that a noteworthy
          125 nations around the globe play the game.{" "}
        </p>
      </div>
      <div className="timeline">
        <h2>Timeline</h2>
        <h4>2015</h4>
        <p>We return to Premiership following back-to-back promotions.</p>
        <h4>2016</h4>
        <p>We Finnished 4th in the league.</p>
        <h4>2017</h4>
        <p>
          We Won Our first Premiership by beating Turku SC 3-1 in the final.{" "}
        </p>
        <h4>2018</h4>
        <p>We were knocked out at our first championship competition.</p>
        <h4>2019</h4>
        <p>We Finnished 2nd in the league.</p>
        <h4>2020</h4>
        <p>...</p>
        <h2>CLUB HONOURS</h2>
        <h4>Premiership Winners Cup</h4>
        <p>2017</p>
        <h4>Premiership Runners-Up</h4>
        <p>2019</p>
      </div>
    </div>
  );
};

export default Club;