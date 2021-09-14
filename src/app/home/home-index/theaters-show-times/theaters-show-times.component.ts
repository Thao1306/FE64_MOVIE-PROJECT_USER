import { Component, OnInit, ViewChildren } from '@angular/core';
import {
  ICinema,
  ICinemaBranch,
  IListFilm,
  IShowTimeFilm,
} from 'src/app/models/cinema';
import { CinemaApiService } from 'src/app/services/cinema-api.service';
import { CinemaService } from 'src/app/services/cinema.service';
import * as dayjs from 'dayjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-theaters-show-times',
  templateUrl: './theaters-show-times.component.html',
  styleUrls: ['./theaters-show-times.component.css'],
})
export class TheatersShowTimesComponent implements OnInit {
  cinemaList: ICinema[] = [];
  cinemaId: string = '';
  cinemaBranchId: string = '';
  cinemaBranchList: ICinemaBranch[] = [];
  listFilmShowing: IListFilm[] | undefined = [];
  listFilm: IListFilm[] | undefined = [];
  showTimeFilmList: IShowTimeFilm[] = [];
  selectedMovie: any;
  filmItemId: string | undefined = '';
  @ViewChildren('film') bookingForm!: any;

  constructor(
    private cinemaSv: CinemaService,
    private cinemaApiSv: CinemaApiService,
    private router: Router
  ) {}
  setActive = (item: number) => {
    if (item === 0) return true;
    return false;
  };

  fetchCinemas = () => {
    this.cinemaApiSv.fetchCinemas().subscribe(
      (res) => {
        this.cinemaSv.setCinemas(res.content);
      },
      (err) => console.log(err)
    );
  };

  fetchCinemaBranch = (cinemaSystemId: string) => {
    this.cinemaApiSv.fetchCinemaSystem(cinemaSystemId).subscribe(
      (res) => {
        this.cinemaSv.setCinemaBranch(res.content[0].lstCumRap);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  getCinemaBranchList = () => {
    this.cinemaSv.cinemaBranchList.subscribe(
      (cinemaBranchs: ICinemaBranch[]) => {
        this.cinemaBranchList = cinemaBranchs;
      }
    );
  };

  handleCinemaSelected = (cinemaSystemId: string) => {
    this.fetchCinemaBranch(cinemaSystemId);
    this.getCinemaBranchList();
    this.cinemaId = cinemaSystemId;
  };

  cinemaBranchSelected = (cinemaBranchId: string) => {
    this.cinemaBranchId = cinemaBranchId;
    const cinemaBranch = this.cinemaBranchList.find(
      (item) => item.maCumRap === cinemaBranchId
    );
    this.listFilm = cinemaBranch?.danhSachPhim;
    this.listFilmShowing = this.listFilm?.filter(
      (item) => item.dangChieu === true
    );

    const showTimeFilmList = this.listFilmShowing?.map((film) => {
      const DateTimeShowingFilmList = film.lstLichChieuTheoPhim.map((item) => {
        return {
          ...item,
          ngayChieu: dayjs(item.ngayChieuGioChieu).format('DD/MM/YYYY'),
          gioChieu: dayjs(item.ngayChieuGioChieu).format('HH:mm'),
        };
      });
      return { ...film, lstLichChieuTheoPhim: DateTimeShowingFilmList };
    });

    this.listFilmShowing = showTimeFilmList;
    console.log(this.listFilmShowing);

    // const DateShowing = showTimeFilmList?.map((item) => {
    //   return {...item, ngayChieu: dayjs(item.ngayChieuGioChieu).format('DD/MM/YYYY')}
    // })
    // console.log(DateShowing)
  };

  handleBooking = () => {
    const ngFormSelected = this.bookingForm._results.find(
      (ngFom: NgForm) => ngFom.submitted === true
    );
    const showTimeFilmId = ngFormSelected.value.showTimeFilm;
    this.router.navigate([`/datve/${showTimeFilmId}`]);
  };

  ngOnInit(): void {
    this.fetchCinemas();
    this.cinemaSv.cinemaList.subscribe((cinemas: ICinema[]) => {
      this.cinemaList = cinemas;
    });
  }
}
