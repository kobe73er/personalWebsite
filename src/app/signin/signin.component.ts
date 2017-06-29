import {Component, OnInit} from '@angular/core';
import {SigninService} from './signin.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SigninService]
})
export class SigninComponent implements OnInit {

  constructor(private signinService: SigninService, private _router: Router) {
  }

  ngOnInit() {
  }

  singin(username: string, password: string) {
    if (!this.signinService.checkUsernameAndPassword(username, password)) {
      alert('not invalid user');
    } else {
      //redirect to home page
      this._router.navigateByUrl('/home');
    }

  }

}
