import { IUser } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authSv: AuthService) { }

  loggedInUser: IUser | null = null;

  ngOnInit(): void {
    this.authSv.me.subscribe((val: IUser | null) => {
      this.loggedInUser = val;
    });
  }

}
