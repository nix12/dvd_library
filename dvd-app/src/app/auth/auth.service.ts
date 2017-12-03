import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../environments/environment';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	userSignedIn$: Subject<boolean> = new Subject();

	constructor(public authService: Angular2TokenService,
							private http: Http) {
		this.authService.init(environment.token_auth_config);
		this.authService.validateToken()
			.subscribe(
				(res) => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
			);
	}

	signinUser(signInData: { email: string, password: string }): Observable<Response> {
		const headers = new Headers;
		headers.append('Access-Control-Allow-Origin', environment.token_auth_config.apiBase);
		const options = new RequestOptions({ headers: headers });

		return this.authService.signIn(signInData)
			.map(
				(res: Response) => {
					this.userSignedIn$.next(true);
					return res;
				}
			)
	}

	signoutUser(): Observable<Response> {
		return this.authService.signOut()
			.map(
				(res) => {
					this.userSignedIn$.next(false);
					return res;
				}
			);
	}
}
