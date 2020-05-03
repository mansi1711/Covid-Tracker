import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  /** Array of login user data. */
  private loginData: IUser[];

  private _isLoggedin$: BehaviorSubject<boolean> =  new BehaviorSubject(false);

  constructor() {
    this.getUsers();
  }

  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "manu",
      "password": "manu"
    }, {
      "id": 2,
      "username": "admin",
      "password": "admin"
    }];
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1  
    &&  this.loginData.findIndex(usr => user.password.toLowerCase() === usr.password.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }

set isLoggedin(isLoggedin: boolean){
  this._isLoggedin$.next(isLoggedin);
}

get isLoggedin$(){
  return this._isLoggedin$.asObservable();
}

}
