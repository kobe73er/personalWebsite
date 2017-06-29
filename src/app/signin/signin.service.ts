import {Injectable} from '@angular/core';

@Injectable()
export class SigninService {

  private username: String;
  private password: string;

  constructor() {
  }

  checkUsernameAndPassword(username: string, password: string) {
    if (username === '262103206@qq.com' && password === 'dengpf123') {
      return true;
    }
  }
}
