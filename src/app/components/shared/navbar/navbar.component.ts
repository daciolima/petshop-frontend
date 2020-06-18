import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public router: Router ) { }

  public user: User;

  ngOnInit() {

    this.user = Security.getUser();

  }

  logout(){
    Security.clear();
    this.router.navigate(['/login']);
  }

}
