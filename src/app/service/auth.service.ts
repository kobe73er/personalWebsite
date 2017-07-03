import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account} from './Acount';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {
  account: Account;

  constructor() {
  }

  login(role: string): Observable<Account> {
    const account = new Account(100, 'test', 'admin', 'test');
    return Observable.of(account);
  }


  getAccount(): Account {
    return this.account;
  }

  isLoggedIn(account: any): boolean {
    return account && account.id != null;
  }

  hasRole(account: any, role: string): boolean {
    return account.roles === 'admin'
  }

}
