import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable'
import { Movie } from './dvd'
import { AuthService } from '../auth/auth.service'
import 'rxjs/add/operator/map'
import * as Toast from 'nativescript-toast'

@Injectable()
export class DvdService {
  moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies'

  constructor(private http: Http,
              private authService: AuthService) { }

  getMovies(): Observable<Movie[]> {
    const headers = new Headers()
		headers.append('access-token', this.authService.token)
		headers.append('client', this.authService.client)
		const options = new RequestOptions({ headers: headers })

  	return this.http.get(this.moviesURL, options)
  		.map((res: Response) => res.json())
  }

  getMovie(id: number): Observable<Movie> {
  	let headers = new Headers()
    headers.append('Accept', 'video/mp4')
    headers.append('access-token', this.authService.token)
		headers.append('client', this.authService.client)
    let options = new RequestOptions({ headers: headers })
    
    Toast.makeText('id ' + id).show()

  	return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
  		.map((res: Response) => res.json())
  }
}
