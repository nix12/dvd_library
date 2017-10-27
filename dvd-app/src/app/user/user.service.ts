import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { User } from './user'
import { Angular2TokenService } from 'angular2-token'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
	private usersURL = 'http://localhost:3000/users'
  constructor(private http: Http,
  						private authTokenService: Angular2TokenService) { }

  update(user: User): Observable<User> {
  	let headers = new Headers()
  	headers.append('content-type', 'application/json')
  	let options = new RequestOptions({ headers: headers })
  	let id = this.authTokenService.currentUserData.id

  	return this.http.put(this.usersURL + '/' + id, user, options)
  		.map(res => res.json())
  }
}
