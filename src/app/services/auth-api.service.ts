import { IUser, LoginUser } from './../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {
  constructor( private http: HttpClient) { }

  signUp(user: IUser): Observable<any> {
    return this.http.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
    user,
    );
  }

  signIn(user: LoginUser): Observable<any> {
    return this.http.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    user,
    );
  }

  fetchProfile(): Observable<any> {
    return this.http.post(
      'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
      undefined,
    )
  }

  editUser = (body: any): Observable<any> => {
    return this.http.put(
      'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      body
    );
  };
}
