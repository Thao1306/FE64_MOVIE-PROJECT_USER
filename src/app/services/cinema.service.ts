import { IShowTimeFilm } from './../models/cinema';
import { ISeat } from './../models/seat';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICinema, ICinemaBranch, IListFilm } from '../models/cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  cinemaList = new BehaviorSubject<ICinema[]> ([])
  cinemaBranchList = new BehaviorSubject<ICinemaBranch[]> ([])
  cinemaBranchListFilm = new BehaviorSubject<IListFilm[]> ([])
  seatList = new BehaviorSubject<ISeat[]> ([])
  showTimeFilmList = new BehaviorSubject<IShowTimeFilm[]> ([])
  constructor() {}

  setCinemas = (cinemas: ICinema[]) => {
    this.cinemaList.next(cinemas)
  }

  setCinemaBranch = (cinemaBranchs: ICinemaBranch[]) => {
    this.cinemaBranchList.next(cinemaBranchs)
  }

  setSeatList = (seats: ISeat[]) => {
    this.seatList.next(seats)
  }

  setShowTimeFilmList = (showTimeFilms: IShowTimeFilm[]) => {
    this.showTimeFilmList.next(showTimeFilms)
  }


}
