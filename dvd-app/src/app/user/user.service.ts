import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { User } from './user'
import { Angular2TokenService } from 'angular2-token'
import { environment } from 'environments/environment'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
	private usersURL = environment.token_auth_config.apiBase;
	public status: number;

	constructor(private http: Http,
							private authTokenService: Angular2TokenService) { }

	update(user: User): Observable<Response> {
		const headers = new Headers();
		headers.append('content-type', 'application/json');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		headers.append('uid', this.authTokenService.currentAuthData.uid)
		const options = new RequestOptions({ headers: headers });
		const id = this.authTokenService.currentUserData.id;

		return this.http.put(this.usersURL + '/users/' + id, user, options)
			.map((res: Response) => {
				this.status = res.status;
				return res.json();
			});
	}
}
