import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

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
