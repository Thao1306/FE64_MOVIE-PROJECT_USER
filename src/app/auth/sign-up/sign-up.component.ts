import { Router } from '@angular/router';
import { AuthAPIService } from './../../services/auth-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  constructor(private authApiSv: AuthAPIService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.signupForm.invalid) return;
    const newUser = { ...this.signupForm.value, maNhom: 'GP01' };
    this.authApiSv.signUp(newUser).subscribe(
      (res) => {
        alert('Đăng ký thành công! Đăng nhập để đặt vé bạn nhé');
        this.router.navigate(['../signin']);
      },
      (err) => {
        alert(err.error.content);
      }
    );
  }
}
