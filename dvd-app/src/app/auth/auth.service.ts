import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { Angular2TokenService } from 'angular2-token'
import { environment } from '../../environments/environment'
import { Response } from '@angular/http'

@Injectable()
export class AuthService {
	userSignedIn$: Subject<boolean> = new Subject()

  constructor(public authService: Angular2TokenService,) {
  	this.authService.init(environment.token_auth_config)
  	this.authService.validateToken()
  		.subscribe(
  			res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
  		)
  }

  signinUser(signInData: { email: string, password: string }): Observable<Response> {
  	return this.authService.signIn(signInData)
  		.map(
  			(res: Response) => {
          this.userSignedIn$.next(true)
          console.log('access token2 ' + res.headers.get('access-token'))
  				return res
  			}
  		)
  }

  signoutUser(): Observable<Response> {
  	return this.authService.signOut()
  		.map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
			);
  }
}
