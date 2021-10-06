import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-showing',
  templateUrl: './movie-showing.component.html',
  styleUrls: ['./movie-showing.component.css'],
})
export class MovieShowingComponent implements OnInit {
  @Input() nowShowingList: IMovie[] = [];
  // @ViewChild('trailer') trailer: any;

  constructor(private modalSv: ModalService) {}
  trailerMovie: string = '';

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
    setTimeout(() => {
      this.modalSv.open('custom-modal-movie');
    }, 500);

    if (trailerSrc.search('http') !== -1 && trailerSrc.search('embed') !== -1) {
      this.trailerMovie = trailerSrc;
      return;
    }
    if (trailerSrc.search('watch') !== -1) {
      const a = 'https://www.youtube.com/embed/' + trailerSrc.split('v=')[1];
      this.trailerMovie = a.split('&')[0];
    } else {
      this.trailerMovie =
        'https://www.youtube.com/embed/yF2y5y7BxgM?list=RDyF2y5y7BxgM';
    }
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {}
}
