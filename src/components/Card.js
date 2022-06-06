import React from "react";

function Card({ card, onCardClick }) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button className="element__trash button"></button>
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />      
      <div className="element__container">
        <h2 className="element__container-title">{card.name}</h2>
        <div className="element__like">
          <button className="element__container-like"></button>
          <span className="element__container_like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;