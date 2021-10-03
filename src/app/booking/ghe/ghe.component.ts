import { ISeat } from 'src/app/models/seat';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() seatList!: ISeat;
  @Output() bookSeat = new EventEmitter();
  isBooking: boolean = false;
  constructor() { }

  handleBookSeat() {
    this.bookSeat.emit(this.seatList);
    this.isBooking = !this.isBooking;
    
  }

  ngOnInit(): void {
  }

}
