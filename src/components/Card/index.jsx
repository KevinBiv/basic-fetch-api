import React from "react";
import "./styles.css";
import reactLogo from "../../assets/react.svg";

function Card({ image, name, tweet, date }) {
  return (
    <div className="card">
      <div className="container">
        <div>
          <img src={image} alt="" className="user-img" />
        </div>
        <div className="text-content">
          <h1 className="username">{name}</h1>
          <p className="tweet">{tweet}</p>
          <p className="date">
            <small>{date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
