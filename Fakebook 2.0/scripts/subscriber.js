'use strict';

import User from './user.js';

export default class Subscriber extends User {
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this._pages = pages;
        this._groups = groups;
        this._canMonetize = canMonetize;
    }

    getInfo() {
        return super.getInfo() + `Pages: ${this._pages}, Groups: ${this._groups}, Can Monetize: ${this._canMonetize ? 'Yes' : 'No'}`;
    }
}
