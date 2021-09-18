import { IUser } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authSv: AuthService) {}

  loggedInUser: IUser | null = null;
  top = document.getElementById('carouselExampleIndicators');

  handleClickOnTop() {
    window.scroll(0, 0);
  }

  

  ngOnInit(): void {
    this.authSv.me.subscribe((val: IUser | null) => {
      this.loggedInUser = val;
    });
  }
}
