import { NgForm } from '@angular/forms';
import { CinemaApiService } from 'src/app/services/cinema-api.service';
import { CinemaService } from 'src/app/services/cinema.service';
import { Subscription } from 'rxjs';
import { GheComponent } from './../ghe/ghe.component';
import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ISeat } from '../../models/seat';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css'],
})
export class DanhSachGheComponent implements OnInit {
  constructor(
    private cinemaSv: CinemaService,
    private cinemaApiSv: CinemaApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  fetchSeatSubscription: Subscription | undefined;
  seatListSubscription: Subscription | undefined;

  seatList: ISeat[] = [];
  showTimeFilmList: any;
  showTimeId: string = '';
  tongTien: number | string = 0;

  // ---- PHẦN ĐƯỢC THÊM ----
  bookingSeatsObjSendBackEnd: {
    maLichChieu: number;
    danhSachVe: { maGhe: number; giaVe: number }[];
  } = {
    maLichChieu: 0,
    danhSachVe: [
      {
        maGhe: 0,
        giaVe: 0,
      },
    ],
  };

  @ViewChildren('bookingForm') bookingForm!: any;

  fetchSeatList = () => {
    this.showTimeId = this.activatedRoute.snapshot.params.id;
    this.fetchSeatSubscription = this.cinemaApiSv
      .fetchSeatList(this.showTimeId)
      .subscribe(
        (res: any) => {
          this.cinemaSv.setSeatList(res.content.danhSachGhe);
        },
        (err) => {
          alert("Mã lịch chiếu không hợp lệ! Vui lòng chọn lại")
          this.router.navigate(["/"])
        }
      );
  };

  fetchshowTimeFilmList = () => {
    const showTimeId: string = this.activatedRoute.snapshot.params.id;
    this.fetchSeatSubscription = this.cinemaApiSv
      .fetchSeatList(showTimeId)
      .subscribe(
        (res: any) => {
          this.cinemaSv.setShowTimeFilmList(res.content.thongTinPhim);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  @ViewChild(GheComponent) seatCompList: QueryList<GheComponent> | undefined;

  // seats: ISeat[] = [];
  bookingSeats: ISeat[] = [];

  setBookingSeats(seatList: ISeat) {
    const foundIndex = this.bookingSeats.findIndex(
      (item) => item.stt === seatList.stt
    );

    if (foundIndex !== -1) {
      this.bookingSeats.splice(foundIndex, 1);
      console.log(this.bookingSeats);
    } else {
      this.bookingSeats.push(seatList);
    }
   
    let tong: number = 0;
    for (let item of this.bookingSeats) {
      tong += item.giaVe;
    }
    this.tongTien = tong.toLocaleString();
  }

  cancelSeat(id: string) {
    const foundIndex = this.bookingSeats.findIndex((item) => item.stt === id);
    this.bookingSeats.splice(foundIndex, 1);

    if (!this.seatCompList) return;

    for (let seatComp of this.seatCompList) {
      if (seatComp.seatList.stt === id) {
        seatComp.isBooking = false;
      }
    }
  }

  ngOnInit() {
    this.fetchSeatList();
    this.seatListSubscription = this.cinemaSv.seatList.subscribe(
      (seatList: ISeat[]) => {
        this.seatList = seatList;
      }
    );

    this.fetchshowTimeFilmList();
    this.seatListSubscription = this.cinemaSv.showTimeFilmList.subscribe(
      (showTimeFilmList: any) => {
        this.showTimeFilmList = showTimeFilmList;
      }
    );
  }

  handleBooking(): void {
    // ---- PHẦN ĐƯỢC THÊM ----
    this.bookingSeatsObjSendBackEnd.maLichChieu = parseInt(this.showTimeId);
    this.bookingSeatsObjSendBackEnd.danhSachVe = this.bookingSeats.map(
      (item) => {
        let maGhe: number = item.maGhe;
        let giaVe: number = item.giaVe;
        return { maGhe, giaVe };
      }
    );
    console.log(this.bookingSeatsObjSendBackEnd.danhSachVe.length);

    // const newTicket = { ...this.bookingForm.value, maLichChieu: '0' };
    this.cinemaApiSv.Booking(this.bookingSeatsObjSendBackEnd).subscribe(
      (res) => {
        if((this.bookingSeatsObjSendBackEnd.danhSachVe.length)==0){
          alert('Vui lòng chọn ghế ngồi !!!');
        }else{
          alert('Đặt vé thành công ^^');
          this.router.navigate([`/`]);
        }
      },
      (err) => {
        console.log(err);
        alert('Vui lòng đăng nhập để được đặt vé !!!');
      }
    );
  }

  //lifecycle chạy lúc component hủy sou(tương ứng với willUnMount của react)
  ngOnDestroy() {
    this.fetchSeatSubscription?.unsubscribe();
    this.seatListSubscription?.unsubscribe();
  }
}
