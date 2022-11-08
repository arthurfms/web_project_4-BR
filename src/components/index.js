import { PopupWithForms } from "../components/PopupWithForms.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import {cards, editUserButton, addUserButton, ImagePopup, userName, userJob, nameInput, jobInput, formList} from "../utils/utils.js";

const cardSection = new Section(
  {
    items: cards,
    renderer: (item) => {
        const card = new Card(item, "#card__template", {
          handleCardClick: () => {
            card.addEventListener("click", () => {
              ImagePopup.open(card._link, card._title);
            });
          },
        });
        cardSection.addItem(card.generateCard());
    },
  },
  ".elements"
);

cardSection.renderItems();



editUserButton.addEventListener("click", () => {
  const UserForm = new PopupWithForms({
    selector: "popup_user",
    sending: () => {
      const inputs = UserForm._getInputValues();
      userName.textContent = inputs["name-input"];
      userJob.textContent = inputs["job-input"];
      UserForm.close();
      nameInput.value = inputs["name-input"];
      jobInput.value = inputs["job-input"];
    },
  });
  const formVal = "";
  UserForm.open();
  UserForm.setEventListeners();
});

addUserButton.addEventListener("click", () => {
  const AddForm = new PopupWithForms({
    selector: "popup_card",
    sending: () => {
      const inputs = AddForm._getInputValues();
      cards.push({name: inputs["title-input"], link: inputs["image-input"]});
      const newCard = new Card(cards[cards.length-1], "#card__template", {
        handleCardClick: () => {
          newCard.addEventListener("click", () => {
            ImagePopup.open(newCard._link, newCard._title);
          });
        },
      });
      cardSection.addItem(newCard.generateCard());
      AddForm.close();
    },
  });
  AddForm.open();
  AddForm.setEventListeners();
});
