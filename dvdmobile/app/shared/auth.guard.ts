import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {}

	canActivate() {
		if(this.authService.userSignedIn) {
			return true
		} else {
			this.router.navigate(['/'])
			return false
		}
	}
}