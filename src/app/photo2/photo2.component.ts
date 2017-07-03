import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-photo2',
  templateUrl: './photo2.component.html',
  styleUrls: ['./photo2.component.css']
})
export class Photo2Component implements OnInit {

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
