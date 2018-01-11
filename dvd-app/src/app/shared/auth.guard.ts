import { Injectable } from '@angular/core'
import { CanActivateChild, Router } from '@angular/router'
import { Angular2TokenService } from 'angular2-token'

@Injectable()
export class AuthGuard implements CanActivateChild {

	constructor(
		private router: Router,
		private authTokenService: Angular2TokenService
	) {}

	canActivateChild() {
		if (this.authTokenService.userSignedIn()) {
			return true;
		} else {
			this.router.navigate(['/signin']);
			return false;
		}
	}
}
