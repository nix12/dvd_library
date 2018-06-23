import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DvdService } from '../../dvd.service';
import { Movie } from '../../dvd';
import { Router } from '@angular/router'
import { UrlSanitizerPipe } from '../../../shared/url-sanitizer.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { NgProgress } from '@ngx-progressbar/core'
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../../../auth/auth.service';

@Component({
	selector: 'app-dvd-item',
	templateUrl: './dvd-item.component.html',
	styleUrls: ['./dvd-item.component.scss']
})
export class DvdItemComponent implements OnInit {
	// moviesURL = 'http://s3.us-east-2.amazonaws.com/dvd-library'
	movie: Movie;
	id: number;

	constructor(
		private route: ActivatedRoute,
		private dvdService: DvdService,
		private sanitizer: DomSanitizer,
		private router: Router,
		private progress: NgProgress,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.progress.start();
		this.route.paramMap
			.switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
			.subscribe(
				(movie) => {
					this.movie = movie;
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

	sanitizeUrl(url): any {
		const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);

		return sanitizedUrl;
	}

	edit(): void {
		this.route.params
			.subscribe((params) => this.router.navigate(['/library', { outlets: { dvd: ['movies', params.id, 'edit'] } }]))
	}
}
