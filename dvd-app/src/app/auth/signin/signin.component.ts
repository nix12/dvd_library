import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
	signinForm: FormGroup
	errorMessage: string

	constructor(
		private authService: AuthService,
		private router: Router,
		private authTokenService: Angular2TokenService,
		private progress: NgProgress
	) {}

	ngOnInit() {
		this.signinForm = new FormGroup({
			'email': new FormControl(null, [Validators.required, Validators.email,
																			Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
			'password': new FormControl(null, Validators.required)
		})
	}

	onSignin(form: any) {
		const email: string = form.email;
		const password: string = form.password;

		this.progress.start();

		this.authService.signinUser({ email, password })
			.subscribe(
				(res) => {
					this.progress.done();
					if (res.status === 200) {
						this.router.navigate(['/library']);
					}
				},
				(errorData) => {
					const error = errorData.json();

					this.progress.done();

					if (error['error']) {
						this.errorMessage = error['error'];
					} else {
						this.errorMessage = error['errors'];
					}
				}
			)
	}
}
