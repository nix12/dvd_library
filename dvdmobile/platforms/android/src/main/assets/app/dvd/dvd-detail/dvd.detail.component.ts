import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { DvdService } from '../dvd.service'
import { Movie } from '../dvd'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'

@Component({
	moduleId: module.id,
	selector: 'app-dvd-detail',
	templateUrl: './dvd.detail.component.html',
	styleUrls: ['./dvd.detail.component.css']
})
export class DvdDetailComponent implements OnInit {
	movies: Movie[] = []
	public selectedMovie: Movie

	constructor(private dvdService: DvdService,
							private router: Router,
							private authService: AuthService) { }

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

	onSignout() {
		this.authService.signoutUser()
			.subscribe(
				() => {
					this.router.navigate(['/'])
				}
			)
	}
}


