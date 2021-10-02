import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthAPIService } from './services/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fe64-movie-project-user';

  onActivate(event: any) {
    window.scroll(0, 0);
  }

    constructor(private authApiSv: AuthAPIService, private authSv: AuthService) {}

  // ngOnInit() {
  //   if (localStorage.getItem('t')) {
  //     this.authApiSv.fetchProfile().subscribe(
  //       (res) => {
  //         this.authSv.setMe(res.content);
  //       },
  //       (err) => {}
  //     );
  //   }
  // }
}
