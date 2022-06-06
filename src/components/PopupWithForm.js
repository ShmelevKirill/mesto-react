import React from "react";

function PopupWithForm({ title, name, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
      <button
          onClick={onClose}
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <h3 className="popup__heading">{title}</h3>
        <form className="popup__container-form" name={name} noValidate>
          {children}
          <button
            type="submit"
            className="popup__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;