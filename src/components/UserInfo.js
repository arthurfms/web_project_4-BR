class UserInfo {
  constructor({ user }) {
    this._userName = user.name;
    this._userJob = user.job;
  }
  getUserInfo() {
    return { name: this._userName, job: this._userJob };
  }
  setUserInfo() {
    const namePlace = document.querySelector(".info__name");
    const jobPlace = document.querySelector(".info__job");

    namePlace.textContent = this._userName;
    jobPlace.textContent = this._userJob;
  }
}
export { UserInfo };
