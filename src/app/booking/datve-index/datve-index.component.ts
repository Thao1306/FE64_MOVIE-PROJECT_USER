import { ISeat } from 'src/app/models/seat';
import { BookingAPIService } from '../../services/booking-api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datve-index',
  templateUrl: './datve-index.component.html',
  styleUrls: ['./datve-index.component.css']
})
export class DatVeIndexComponent implements OnInit {

  constructor(
    private bookingApiSv: BookingAPIService
    ) { }

    fetchSeatSubscription: Subscription | undefined;
    seatListSubscription: Subscription | undefined;

    isLoading: boolean = false;

  seatList: ISeat[] = [];

  fetchSeats = () => {
    this.isLoading = true ;
    this.fetchSeatSubscription = this.bookingApiSv.fecthBooking().subscribe(
      (res:any) => {
        console.log(res);
        // this.movieSv.setMovieList(res.content);
        // this.isLoading = false ;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  ngOnInit(): void {
  }

}
