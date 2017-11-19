import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Response, Http, Headers, RequestOptions, } from '@angular/http'
import * as Toast from 'nativescript-toast'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/Observable/throw'

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  signinUser(signInData: { email: string, password: string }): Observable<Response> {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers })
    let url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_in'
    
    return this.http.post(url, signInData, options)
      .map((res: Response) => {
        let body = res.json()
        console.log("body: " + body)
        console.log('status: ' + res.status)
        Toast.makeText('status: ' + res.status).show();
        console.log('statusText: ' + res.statusText)
        Toast.makeText('statusText: ' + res.statusText).show();
        console.log('%O', body)
        return body || null
      })
      .catch((error) => {
        return Observable.throw(error)
      })
  }

//   signoutUser(): Observable<Response> {
//   	return this.authService.signOut()
//   		.map(
//         res => {
//           this.userSignedIn$.next(false);
//           return res;
//         }
// 			);
//   }
}
