import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICinema, ICinemaBranch, IListFilm } from '../models/cinema';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  cinemaList = new BehaviorSubject<ICinema[]>([]);
  cinemaBranchList = new BehaviorSubject<ICinemaBranch[]> ([])
  cinemaBranchListFilm = new BehaviorSubject<IListFilm[]> ([])
  constructor() {}

  setCinemas = (cinemas: ICinema[]) => {
    this.cinemaList.next(cinemas)
  }

  setCinemaBranch = (cinemaBranchs: ICinemaBranch[]) => {
    this.cinemaBranchList.next(cinemaBranchs)
  }
}
