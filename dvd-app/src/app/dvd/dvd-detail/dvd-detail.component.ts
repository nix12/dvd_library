import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { DvdService } from '../dvd.service'
import { Movie } from '../dvd'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {
  movies: Movie[] = []
  public selectedMovie: Movie

  constructor(private dvdService: DvdService,
              private router: Router) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies(): void {
    this.dvdService.getMovies()
      .subscribe(movies => this.movies = movies)
  }

  onSelect(movie: Movie) {
    this.selectedMovie = movie
  }
}


