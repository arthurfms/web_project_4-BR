import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector(".image-popup__image");
    this._subtitle = this._popup.querySelector(".image-popup__subtitle");
  }

  open(image, title) {
    this._image.src = image;
    this._image.alt = title;
    this._subtitle.textContent = title;
    super.open();
  }
}

export { PopupWithImage };
