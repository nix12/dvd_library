import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router'
import { DvdService } from '../../dvd.service'
import { Movie } from '../../dvd'
import { UrlSanitizerPipe } from '../../../shared/url-sanitizer.pipe'
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap'

@Component({
	selector: 'app-dvd-item',
	templateUrl: './dvd-item.component.html',
	styleUrls: ['./dvd-item.component.scss']
})
export class DvdItemComponent implements OnInit {
	movie: Movie
	id: number

	constructor(private route: ActivatedRoute,
							private dvdService: DvdService,
							private sanitizer: DomSanitizer) {
	}

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
			.subscribe(movie => this.movie = movie);
	}

	sanitizeUrl(url) {
		const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://moviedatabase-env.us-west-2.elasticbeanstalk.com' + url)

		return sanitizedUrl
	}
}
