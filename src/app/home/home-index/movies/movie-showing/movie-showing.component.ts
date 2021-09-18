import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-showing',
  templateUrl: './movie-showing.component.html',
  styleUrls: ['./movie-showing.component.css'],
})
export class MovieShowingComponent implements OnInit {
  @Input() nowShowingList: IMovie[] = [];
  constructor(private modalSv: ModalService) {}
  @ViewChild('trailer') trailer: any;

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
    this.trailer.nativeElement.src = trailerSrc;

    setTimeout(() => {
      this.modalSv.open('custom-modal-movie');
    }, 500);
  };
  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {}
}
