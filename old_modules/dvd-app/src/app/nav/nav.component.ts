import { Component, OnInit, AfterViewInit} from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { User } from '../user/user'
import { Angular2TokenService } from 'angular2-token'
import { NgProgress } from '@ngx-progressbar/core'
import { DvdService } from '../dvd/dvd.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
	check: Subject<{}> = new Subject();

	constructor(
		private authService: AuthService,
		private router: Router,
		private authTokenService: Angular2TokenService,
		private dvdService: DvdService,
		private progress: NgProgress
	) {  }

	ngOnInit() {
		let header: number;

		this.dvdService.header.subscribe((value) => header = value);

		this.check.debounceTime(5000).subscribe(() => {
			console.log('nav', header);
			if (header === 401) {
				this.signoutUser();
			}
		})
	}

	ngAfterViewInit() {

	}

	signoutUser() {
		this.progress.start();

		this.authService.signoutUser()
			.subscribe(
				() => {
					this.router.navigate(['/signin']);
				}
			)
		this.progress.done();
	}
}
