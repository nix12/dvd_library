import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DvdService } from '../dvd/dvd.service';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private authService: AuthService,
		private dvdService: DvdService,
		private userService: UserService
	) {}

	canActivate(): boolean {
		let dvdHeader: number;
		let userHeader: number;
		let signedIn: boolean;

		this.dvdService.header.subscribe((value) => {
			dvdHeader = value;
			console.log('subscribe', dvdHeader);
		});

		this.userService.header.subscribe((value) => {
			userHeader = value;
			console.log('user subscribe', userHeader);
		})

		this.authService.userSignedIn$.subscribe((value) => {
			signedIn = value;
			console.log(signedIn);
		});

		console.log('head', dvdHeader);
		console.log('user head', userHeader);

		if (dvdHeader === 401 || userHeader === 401) {
			console.log('Unauthorized')
			this.authService.userSignedIn$.next(false);
			this.dvdService.header.next(200);
			this.router.navigate(['/signin']);
			return false;
		}

		if (signedIn === true) {
			console.log('user signed in');
			return true;
		}

		if (signedIn === false) {
			this.router.navigate(['/signin']);
			return false;
		}

		return true
	}
}
