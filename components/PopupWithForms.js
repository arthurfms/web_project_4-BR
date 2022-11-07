import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import {cards, editUserButton, addUserButton, ImagePopup, userName, userJob, nameInput, jobInput, formList, userPopup, cardPopup, formSelectors} from "../utils/utils.js";


class PopupWithForms extends Popup {
  constructor({ selector, sending }) {
    super(selector);
    this._form = document.querySelector(`.${this._selector}`).querySelector(".form");
    this._inputs = {};
    this._closeButton = document.querySelector(`.${this._selector}`).querySelector(".popup__close-button");
    this._sendButton = this._form.querySelector(".form__submit");
    this._sending = sending;
  }
  _getInputValues() {
    this._inputsList.forEach((input) => {
      const inputName = input.id;
      this._inputs[`${inputName}`] = input.value;
    });
    return this._inputs;
  }
  open() {
    this._inputsList = this._form.querySelectorAll(".form__input");
    const newForm = new FormValidator(formSelectors, this._form);
    newForm.setEventListeners();
    this._popup.classList.add("popup_opened");
  }
  close() {
    this._popup.classList.remove("popup_opened");
  }
  setEventListeners() {
    document.addEventListener("keyup", (evt) => {
      this._handleEscClose(evt);
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._sendButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._sending();
    });
    document.addEventListener("keydown", (evt) => {
      if(evt.key == "Enter" && this._sendButton.classList.contains("form__submit_inactive")) {
        evt.preventDefault();
      }
    });
  }

}
export { PopupWithForms };
