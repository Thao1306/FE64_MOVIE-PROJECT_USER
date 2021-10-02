import { IUser, IShowTicket } from './../models/user';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  me = new BehaviorSubject<IUser | null>(null);
  showTicket = new BehaviorSubject<IShowTicket[]> ([]);

  setMe(value: IUser) {
    this.me.next(value);
  }

  setShowTicket = (showTicket: IShowTicket[]) => {
    this.showTicket.next(showTicket)
  }

  setShowSeat = (showSeat: IShowTicket[]) => {
    this.showTicket.next(showSeat)
  }

  constructor() { }
}
