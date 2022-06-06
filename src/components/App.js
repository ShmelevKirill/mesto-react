import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import "../index.css";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
      React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
      React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
  
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    }
  
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
      setSelectedCard(card);
    }
  
    function closeAllPopups() {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setSelectedCard(null);
    }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        ></Main>

        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link-avatar"
            id="link-input-avatar"
            placeholder="Ссылка на картинку"
            className="popup__input popup__container-avatar"
            required
          />
          <span className="popup__input-error url-avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Ваше имя"
            className="popup__input popup__input_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            name="profession"
            id="profession-input"
            placeholder="Вид деятельности"
            className="popup__input popup__input_info"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error info-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Название"
            className="popup__input popup__input_place"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error place-input-error"></span>

          <input
            type="url"
            name="link"
            id="link-input"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_url"
            required
          />
          <span className="popup__input-error url-input-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;