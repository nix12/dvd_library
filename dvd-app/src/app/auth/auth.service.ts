import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { Angular2TokenService } from 'angular2-token'
import { environment } from '../../environments/environment'
import { Response, Http, Headers, RequestOptions, RequestMethod } from '@angular/http'

@Injectable()
export class AuthService {
	userSignedIn$: Subject<boolean> = new Subject()

  constructor(public authService: Angular2TokenService,
              private http: Http) {
  	this.authService.init(environment.token_auth_config)
  	this.authService.validateToken()
  		.subscribe(
  			res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
  		)
  }

  signinUser(signInData: { email: string, password: string }): Observable<Response> {
    let headers = new Headers;
    headers.append('Access-Control-Allow-Origin', environment.token_auth_config.apiBase)
    let options = new RequestOptions({ headers: headers })

    return this.authService.signIn(signInData)
    // return this.http.post(environment.token_auth_config.apiBase + '/auth/sign_in', signInData, options)
  	// return this.authService.request({
   //    url: 'http://localhost:3000',
   //     // environment.token_auth_config.apiBase + '/auth/sign_in', 
   //    body: signInData, 
   //    headers: headers,
   //    method: RequestMethod.Post
   //  })
  		.map(
  			(res: Response) => {
          this.userSignedIn$.next(true)
          console.log(res)
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
