import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DvdService } from '../dvd.service';
import { Movie } from '../dvd';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
	selector: 'app-dvd-detail',
	templateUrl: './dvd-detail.component.html',
	styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {
	movies: Movie[] = []
	public selectedMovie: Movie

	constructor(
		private dvdService: DvdService,
		private router: Router,
		private progress: NgProgress
	) { }

	ngOnInit() {
		this.progress.start();
		this.getMovies();
	}

	getMovies(): void {
		this.dvdService.getMovies()
			.subscribe((movies) => {
				this.movies = movies;
				this.progress.done();
			})
	}

	onSelect(movie: any): void {
		this.router.navigate(['/library', { outlets: { dvd: ['movies', movie.id] } }]);
	}
}


