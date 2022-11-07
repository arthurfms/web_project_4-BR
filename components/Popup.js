export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popup = document.querySelector(`.${selector}`);
    this._closeButton = this._popup.querySelector(`.${selector}__close-button`);
  }

  open() {
    this._popup.classList.add(`${this._selector}_opened`);
  }

  close() {
    this._popup.classList.remove(`${this._selector}_opened`);
  }

  _handleEscClose(evt) {
    if (evt.key == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keyup", (evt) => {
      this._handleEscClose(evt);
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains(`${this._selector}_opened`)) {
        this.close();
      }
    });
    this._closeButton.addEventListener("click", () => {
      this.close();
    })
  }
}
