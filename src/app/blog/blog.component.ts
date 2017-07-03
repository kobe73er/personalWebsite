import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
