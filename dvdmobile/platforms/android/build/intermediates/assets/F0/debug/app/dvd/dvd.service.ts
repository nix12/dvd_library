import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http"
import { Observable } from 'rxjs'
import { Movie } from './dvd'
import 'rxjs/add/operator/map'

@Injectable()
export class DvdService {
  moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com'

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]> {
  	return this.http.get(this.moviesURL)
  		.map((res: Response) => res.json())
  }

  getMovie(id: number): Observable<Movie> {
  	let headers = new Headers()
    headers.append('Accept', 'video/mp4')
  	let options = new RequestOptions({ headers: headers })

  	return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
  		.map((res: Response) => res.json())
  }
}
