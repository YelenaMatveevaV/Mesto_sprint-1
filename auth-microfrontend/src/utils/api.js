class Api {
    constructor({ address, token, groupId }) {
        // стандартная реализация — объект options
        this._address = address;
        this._groupId = groupId;
        this._token = token; 
    }


getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  } // возможно это логин

  getAppInfo() {
    return Promise.all([this.getCardList(), this.getUserInfo()]);
  }

  getCardList() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  } //Возможно это профиль
}

const api = new Api({
    //address: 'http://localhost:3001',
    groupId: `cohort0`,
    token: `80a75492-21c5-4330-a02f-308029e94b63`,
    address: 'https://nomoreparties.co',
});

export default api;
