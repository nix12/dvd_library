import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Angular2TokenService } from 'angular2-token'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router,
							private authTokenService: Angular2TokenService) {}

	canActivate() {
		if (this.authTokenService.userSignedIn()) {
			return true;
		} else {
			this.router.navigate(['/signin']);
			return false;
		}
	}
}
