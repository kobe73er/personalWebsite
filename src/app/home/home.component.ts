import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInAccount: string;

  constructor(private router: Router) {
    const loggedInAccout = JSON.parse(sessionStorage.getItem('login-user'))
    this.loggedInAccount = loggedInAccout.name;
  }

  ngOnInit() {
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/signin'])
  }

}
