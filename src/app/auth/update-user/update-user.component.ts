import { NgForm } from '@angular/forms';
import { IUser, IShowTicket } from './../../models/user';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthAPIService } from './../../services/auth-api.service';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  constructor(private authApiSv: AuthAPIService, private authSv: AuthService) {}

  fetchProfileSubscription: Subscription | undefined;
  profileSubscription: Subscription | undefined;

  proFile: any;
  showTicket: IShowTicket[] = [];
  showSeat: IShowTicket[] = [];

  @ViewChild('editUser') editUser!: NgForm;

  idUser: string = '';
  userInfo: IUser = {
    maNhom: ',',
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDT: '',
    matKhau: '',
    maLoaiNguoiDung: '',
  };

  handleSubmit() {
    this.userInfo = { ...this.userInfo };
    if (this.editUser.form.invalid) {
      alert('Thông tin bắt buộc không được để trống');
    } else {
      this.userInfo = { ...this.userInfo };
      const newUser: IUser | any = { ...this.userInfo };

      this.profileSubscription = this.authApiSv.editUser(newUser).subscribe(
        (res) => {
          alert('Chỉnh sửa người dùng thành công');
        },
        (err) => {
          console.log(err);
          alert('Chỉnh sửa người dùng không thành công');
        }
      );
    }
  }

  fetchProfile = () => {
    this.fetchProfileSubscription = this.authApiSv.fetchProfile().subscribe(
      (res: any) => {
        this.authSv.setMe(res.content);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  fetchShowTicket = () => {
    this.fetchProfileSubscription = this.authApiSv.fetchProfile().subscribe(
      (res: any) => {
        this.authSv.setShowTicket(res.content.thongTinDatVe);
        this.showSeat = res.content.thongTinDatVe[0].danhSachGhe;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  ngOnInit(): void {
    this.fetchProfile();
    this.profileSubscription = this.authSv.me.subscribe((value) => {
      this.proFile = value;
    });

    this.fetchShowTicket();
    this.profileSubscription = this.authSv.showTicket.subscribe(
      (ticket: IShowTicket[]) => {
        this.showTicket = ticket;
      }
    );

    this.fetchProfileSubscription = this.authApiSv.fetchProfile().subscribe(
      (res) => {
        this.userInfo = res.content;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.fetchProfileSubscription?.unsubscribe();
    this.profileSubscription?.unsubscribe;
  }
}
