import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api
    .getUserInfo()
    .then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
      })
    .catch((err) => console.log(err));

  api
    .getInitialCards()
    .then((res) => {
      setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__avatar"
            />
            <button
              onClick={onEditAvatar}
              className="profile__avatar-cover"
              type="button"
              aria-label="Обновить аватар"
            ></button>
        </div>

        <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
              <button
                onClick={onEditProfile}
                className="profile__edit button"
                type="button"
                aria-label="Редактировать профиль"
              ></button>
            <h2 className="profile__status">{userDescription}</h2>
        </div>
        
        <button
          onClick={onAddPlace}
          className="profile__button button"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>
      
      <section className="elements" aria-label="Карточки">
        <ul className="elements__list">
          {cards.map((card, id) => (
            <Card key={id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;