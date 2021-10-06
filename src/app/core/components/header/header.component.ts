import { IUser } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authSv: AuthService, private route: Router) {}

  handleLogOut = () => {
    localStorage.removeItem('t');
    this.route.navigate(['/']);
    window.location.reload();
  };


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
