import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { User } from '../user/user'
import { Angular2TokenService } from 'angular2-token'
import { NgProgress } from '@ngx-progressbar/core'

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private router: Router,
		private authTokenService: Angular2TokenService,
		private progress: NgProgress
	) {  }

	ngOnInit() {

	}

	signoutUser() {
		this.progress.start();

		this.authService.signoutUser()
			.subscribe(
				() => {
					this.progress.done();
					this.router.navigate(['/signin']);
				}
			)
	}
}
