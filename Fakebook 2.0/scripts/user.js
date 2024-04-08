'use strict';

export default class User {
    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    getInfo() {
        return `Name: ${this._name}, Username: ${this._userName}, Email: ${this._email}`;
    }
}
