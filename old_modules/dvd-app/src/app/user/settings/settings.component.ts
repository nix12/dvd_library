import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { confirmPassword } from '../../validators/confirm-password';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { Subject } from 'rxjs/Subject'
import { NgProgress } from '@ngx-progressbar/core'
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { DvdService } from '../../dvd/dvd.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	private editForm: FormGroup;
	successMessage: string;
	errorMessage: string;
	id: number;
	email: string = this.authTokenService.currentUserData.email;
	private _success = new Subject<string>();
	private _failure = new Subject<string>();

	constructor(
		private authTokenService: Angular2TokenService,
		private userService: UserService,
		private fb: FormBuilder,
		private progress: NgProgress,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.progress.start();

		const userData = this.authTokenService.currentUserData;

		this.editForm = this.fb.group({
			'email': new FormControl(userData.email, [Validators.email, Validators.required,
																								Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
			'password': new FormControl(null, [Validators.minLength(8), Validators.maxLength(30)]),
			'password_confirmation': new FormControl(null, [Validators.minLength(8), Validators.maxLength(30)])
		}, { validator: confirmPassword })

		this._success.subscribe((message) => this.successMessage = message);
		debounceTime.call(this._success, 10000).subscribe(() => this.successMessage = null)

		this._failure.subscribe((message) => this.errorMessage = message);
		debounceTime.call(this._failure, 10000).subscribe(() => this.errorMessage = null)

		this.progress.done();
	}

	update(form: FormGroup) {
		this.progress.start();

		this.userService.update(form.value)
			.subscribe(
				() => {
					if (this.userService.status === 200) {
						this._success.next('Email/Password successfully updated');
					}
				},
				(error) => {
					let header: number;
					this.userService.header.subscribe((value) => header = value)

					if (error['status'] === 422) {
						this._failure.next('Password and Password Confirmation do not match');
					} else if (error['status'] === 401 || header === 401) {
						this._failure.next('UNAUTHORIZED');
						this.router.navigate(['/signin']);
						this.userService.header.next(200);
						this.authService.userSignedIn$.next(false);
					} else {
						this._failure.next('Server Error');
					}
				}
			)
		this.progress.done();
		this.editForm.controls['password'].reset();
		this.editForm.controls['password_confirmation'].reset();
	}
}
