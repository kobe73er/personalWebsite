import {Injectable} from '@angular/core';
import {Account} from '../service/Acount';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class SigninService {

  private username: String;
  private password: string;
  private validAccountList = [];

  constructor() {
    const dpf = new Account(1, 'dpf', 'admin', 'admin');
    const lyl = new Account(2, 'lyl', 'admin', 'admin');
    const visitor = new Account(3, 'visitor', 'visitor', 'visitor');

    this.validAccountList.push(dpf)
    this.validAccountList.push(lyl)
    this.validAccountList.push(visitor)

  }

  checkUsernameAndPassword(username: string, password: string) {
    for (const accout of this.validAccountList) {
      if (accout.name === username && accout.password === password) {
        sessionStorage.setItem('login-user', JSON.stringify(accout));
        return true;
      }
    }
    return false;
  }
}
