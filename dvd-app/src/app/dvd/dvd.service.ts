import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http"
import { Observable } from 'rxjs'
import { Movie } from './dvd'
import { Angular2TokenService } from 'angular2-token'
import 'rxjs/add/operator/map'

@Injectable()
export class DvdService {
  moviesURL = 'http://localhost:3001/movies'

  constructor(private http: Http,
              private tokenService: Angular2TokenService) { }

  getMovies(): Observable<Movie[]> {
  	return this.http.get(this.moviesURL)
  		.map((res: Response) => res.json())
  }

  getMovie(id: number): Observable<Movie> {
  	let headers = new Headers()
    headers.append('Accept', 'video/mp4')
    headers.append('access-token', this.tokenService.currentAuthData.accessToken)
    headers.append('client', this.tokenService.currentAuthData.client)
  	let options = new RequestOptions({ headers: headers })

    console.log('HEADERS ' + headers) 

  	return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
  		.map((res: Response) => res.json())
  }
}
