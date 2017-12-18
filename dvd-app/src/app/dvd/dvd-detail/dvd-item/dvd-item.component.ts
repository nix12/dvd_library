import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DvdService } from '../../dvd.service';
import { Movie } from '../../dvd';
import { Router } from '@angular/router'
import { UrlSanitizerPipe } from '../../../shared/url-sanitizer.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-dvd-item',
	templateUrl: './dvd-item.component.html',
	styleUrls: ['./dvd-item.component.scss']
})
export class DvdItemComponent implements OnInit {
	moviesURL = 'http://s3.us-east-2.amazonaws.com/dvd-library'
	movie: Movie;
	id: number;

	constructor(
		private route: ActivatedRoute,
		private dvdService: DvdService,
		private sanitizer: DomSanitizer,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
			.subscribe(movie => this.movie = movie)
	}

	sanitizeUrl(url): any {
		const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.moviesURL + url);

		return sanitizedUrl;
	}

	edit(): void {
		this.route.params
			.subscribe((params) => this.router.navigate(['/library', { outlets: { dvd: ['movies', params.id, 'edit'] } }]))
	}
}
