import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: IMovie;
  @Output() selectedMovie = new EventEmitter();
  constructor(private router: Router) {}

  openMovieTrailer = (trailerSrc: string) => {
    this.selectedMovie.emit(trailerSrc);
  };

  navigateToDetail = (movieId: number) => {
    this.router.navigate([`/detail/${movieId}`]);
  };
  ngOnInit(): void {}
}
