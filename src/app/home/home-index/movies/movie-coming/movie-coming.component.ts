import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-coming',
  templateUrl: './movie-coming.component.html',
  styleUrls: ['./movie-coming.component.css'],
})
export class MovieComingComponent implements OnInit {
  @Input() comingSoonList: IMovie[] = [];
  // @ViewChild('trailer') trailer: any;

  constructor(private modalSv: ModalService) {}
  trailerMovie: string = ""

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
        },
      },
    ],
  };

  openModalShowing = (trailerSrc: string) => {
    // this.trailer.nativeElement.src = trailerSrc;
    this.trailerMovie = trailerSrc

    setTimeout(() => {
      this.modalSv.open('custom-modal-movie');
    }, 500);
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {}
}
