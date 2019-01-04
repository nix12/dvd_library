import { Component, OnInit, Pipe } from '@angular/core';
import { DvdService } from '../dvd.service';
import { Movie } from '../dvd';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
import { AuthService } from '../../auth/auth.service';

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
		private progress: NgProgress,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.progress.start();
		this.getMovies();
	}

	getMovies(): void {
		this.dvdService.getMovies()
			.subscribe(
				(movies) => {
					this.movies = movies;
				},
				(error) => {
					let header: number;
					this.dvdService.header.subscribe((value) => header = value);

					if (header === 401) {
						this.router.navigate(['/signin']);
						this.dvdService.header.next(200);
						this.authService.userSignedIn$.next(false);
					}
				}
			)
		this.progress.done();
	}

	onSelect(movie: any): void {
		this.router.navigate(['/library', { outlets: { dvd: ['movies', movie.id] } }]);
	}
}


