"use strict";
class Storage {
  static addNewUserToStorage(newUser) {
    let users = this.getUsersFromStorage();

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
  }
  static getUsersFromStorage() {
    let users;

    if (localStorage.getItem("users") === null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
  }
}
