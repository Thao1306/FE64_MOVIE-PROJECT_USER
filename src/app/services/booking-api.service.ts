import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingAPIService {
  constructor( private http: HttpClient) { }

  fecthBooking(): Observable<any> {
    return this.http.get(
      'http://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=1',
      {
      params: {
        maNhom: 'GP01',
      },
    }
    );
  }

}
