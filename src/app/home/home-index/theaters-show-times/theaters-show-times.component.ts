import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import {
  ICinema,
  ICinemaBranch,
  IListFilm,
  IShowTimeFilm,
} from 'src/app/models/cinema';
import { CinemaApiService } from 'src/app/services/cinema-api.service';
import { CinemaService } from 'src/app/services/cinema.service';
import * as dayjs from 'dayjs';
import { Event, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theaters-show-times',
  templateUrl: './theaters-show-times.component.html',
  styleUrls: ['./theaters-show-times.component.css'],
})
export class TheatersShowTimesComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  cinemaList: ICinema[] = [];
  cinemaId: string = '';
  cinemaBranchId: string = '';
  cinemaBranchList: ICinemaBranch[] = [];
  listFilmShowing: IListFilm[] | undefined = [];
  listFilm: IListFilm[] | undefined = [];
  showTimeFilmList: IShowTimeFilm[] = [];
  selectedMovie: any;
  filmItemId: string | undefined = '';
  checkBookingSelected: boolean = false;
  fetchCinemasSubscription: Subscription | undefined;
  fetchCinemaSystemSubscription: Subscription | undefined;
  cinemaBranchListSubscription: Subscription | undefined;
  cinemaListSubscription: Subscription | undefined;

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
    this.fetchCinemasSubscription = this.cinemaApiSv.fetchCinemas().subscribe(
      (res) => {
        const cinemaList = res.content;
        this.cinemaSv.setCinemas(cinemaList);
        this.handleCinemaSelected(cinemaList[0].maHeThongRap);
        this.isLoading = false;
      },
      (err) => console.log(err)
    );
  };

  fetchCinemaBranch = (cinemaSystemId: string) => {
    this.fetchCinemaSystemSubscription = this.cinemaApiSv
      .fetchCinemaSystem(cinemaSystemId)
      .subscribe(
        (res) => {
          this.cinemaSv.setCinemaBranch(res.content[0].lstCumRap);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  getCinemaBranchList = () => {
    this.cinemaBranchListSubscription =
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

  handleCinemaBranchSelected = (cinemaBranchId: string) => {
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
  };

  handleBooking = (id: any) => {
    const ngFormValueArr = this.bookingForm._results.map(
      (ngForm: NgForm) => ngForm.value
    );

    ngFormValueArr.forEach((item: any) => {
      for (let key in item) {
        if (key === id.toString() && item[key] !== '') {
          this.router.navigate([`/datve/${item[key]}`]);
          return;
        } else {
          this.checkBookingSelected = true;
        }
      }
    });
  };

  ngOnInit(): void {
    this.fetchCinemas();
    this.cinemaListSubscription = this.cinemaSv.cinemaList.subscribe(
      (cinemas: ICinema[]) => {
        this.cinemaList = cinemas;
      }
    );
  }
  ngOnDestroy(): void {
    this.fetchCinemaSystemSubscription?.unsubscribe;
    this.fetchCinemasSubscription?.unsubscribe;
    this.cinemaBranchListSubscription?.unsubscribe;
    this.cinemaListSubscription?.unsubscribe;
  }
}
