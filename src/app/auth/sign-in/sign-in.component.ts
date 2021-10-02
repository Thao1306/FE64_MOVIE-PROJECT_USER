import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { AuthAPIService } from './../../services/auth-api.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  constructor(private authApiSv: AuthAPIService, private authSv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    if (this.signinForm.invalid) return;
    const newUser = { ...this.signinForm.value, maNhom: 'GP01'};
    this.authApiSv.signIn(this.signinForm.value).subscribe(
      (res) => {
        // console.log(res);
        this.authSv.setMe(res.content);
        localStorage.setItem('t', res.content.accessToken);
        this.router.navigate([`/`]);
      },
      (err) => {
        console.log(err);
        alert('Tài khoản hoặc mật khẩu không đúng !!');
      }
    );

    console.log(this.signinForm);
    console.log(this.signinForm.value);
  }

}
