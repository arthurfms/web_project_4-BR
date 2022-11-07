import { PopupWithImage } from "../components/PopupWithImage.js";
import { FormValidator } from "../components/FormValidator.js";


 const cards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },

  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },

  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },

  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

 const editUserButton = document.querySelector(".info__edit-button");
 const addUserButton = document.querySelector(".add-button");
 const ImagePopup = new PopupWithImage("image-popup");
 const userName = document.querySelector(".info__name");
 const userJob = document.querySelector(".info__job");
 const nameInput = document.querySelector("#name-input");
 const jobInput =document.querySelector("#job-input");
 const userPopup = document.querySelector(".popup_user");
 const cardPopup = document.querySelector(".popup_card");
 const formSelectors = {
  formSelector: ".form",

  inputSelector: ".form__input",

  submitButtonSelector: ".form__submit",

  inactiveButtonClass: "form__submit_inactive",

  inputErrorClass: "form__input_type_error",

  errorClass: "form__input_type_error_active",
};


 export {cards, editUserButton, addUserButton, ImagePopup, userName, userJob, nameInput, jobInput, userPopup, cardPopup, formSelectors};