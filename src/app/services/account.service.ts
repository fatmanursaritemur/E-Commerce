import { Injectable } from '@angular/core';
import { User } from 'src/app/login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn: boolean = false;
  login(user: User): boolean {
    if (user.userName == "Fatmanur" && user.password == "123") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
