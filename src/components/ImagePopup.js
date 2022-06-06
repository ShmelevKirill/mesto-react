import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_photo popup_image ${card && "popup_opened"}`}>
      <div className="popup__container-img">
      <button
          onClick={onClose}
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
          <img
            src={card ? card.link : "#"}
            alt={card ? card.name : "#"}
            className="popup__img"
          />
          <h3 className="popup__title">
            {card ? card.name : ""}
          </h3>
      </div>
    </div>
  );
}

export default ImagePopup;