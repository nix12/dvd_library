import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { DvdService } from '../dvd.service'
import { Movie } from '../dvd'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'
import * as Toast from 'nativescript-toast'

@Component({
	moduleId: module.id,
	selector: 'app-dvd-detail',
	templateUrl: './dvd.detail.component.html',
	styleUrls: ['./dvd.detail.component.css']
})
export class DvdDetailComponent implements OnInit {
	public movies: Movie[] = []
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

	onSelect(movie: any) {
		this.router.navigate(['/movies', movie.id])
		Toast.makeText('movie ' + movie.id).show()
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


