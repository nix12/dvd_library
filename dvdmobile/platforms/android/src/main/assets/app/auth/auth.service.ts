import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Response, Http, Headers, RequestOptions, } from '@angular/http'
import * as Toast from 'nativescript-toast'
import { Subject } from 'rxjs/Subject'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/Observable/throw'

@Injectable()
export class AuthService {
  userSignedIn: Subject<boolean> = new Subject()
  uid: string
  token: string
  client: string

  constructor(private http: Http) {}

  signinUser(signInData: { email: string, password: string }): Observable<Response> {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers })
    let url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_in'
    
    return this.http.post(url, signInData, options)
      .map((res: Response) => {
        this.userSignedIn.next(true)
        this.client = res.headers.get('client')
        this.token = res.headers.get('access-token')
        this.uid = res.headers.get('uid')
        Toast.makeText('client ' + this.client).show()
        Toast.makeText('token ' + this.token).show()
        Toast.makeText('uid ' + this.uid).show()

        let body = res.json()
        // console.log("body: " + body)
        // console.log('status: ' + res.status)
        // Toast.makeText('status: ' + res.status).show();
        // console.log('statusText: ' + res.statusText)
        // Toast.makeText('statusText: ' + res.statusText).show();
        // console.log('%O', body)
        return body || null
      })
  }

  signoutUser(): Observable<Response> {
    let headers = new Headers()
    headers.append('client', this.client)
    headers.append('access-token', this.token)
    headers.append('uid', this.uid)
    let options = new RequestOptions({ headers: headers })
    let url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_out'
    
    return this.http.delete(url, options)
  		.map(
        (res) => {
          this.userSignedIn.next(false)
          return res;
        }
			);
  }
}
