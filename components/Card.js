import { ImagePopup } from "../utils/utils.js";

class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._isLiked = false;
    this.handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setImage();
    this._setTitle();
    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setImage() {
    const image = this._element.querySelector(".card__image");
    image.src = this._image;
    image.alt = this._title;
  }

  _setTitle() {
    this._element.querySelector(".card__title").textContent = this._title;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });
    this._element
      .querySelector(".card__trash-icon")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        ImagePopup.open(this._image, this._title);
        ImagePopup.setEventListeners();
      });
  }

  _handleLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
    this._isLiked = !this._isLiked;
  }

  _deleteCard() {
    this._element.remove();
  }
}

export { Card };
