import { Router } from '@angular/router';
import { AuthAPIService } from './../../services/auth-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  constructor(private authApiSv: AuthAPIService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    if (this.signupForm.invalid) return;
    const newUser = { ...this.signupForm.value, maNhom: 'GP01'};
    this.authApiSv.signUp(newUser).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['../signin']);
      },
      (err) => {
        console.log(err);
        alert("Đăng ký không thành công")
      }
    );

    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

}
