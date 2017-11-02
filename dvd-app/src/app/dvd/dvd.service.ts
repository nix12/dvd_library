import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http"
import { Observable } from 'rxjs'
import { Movie } from './dvd'
import 'rxjs/add/operator/map'

@Injectable()
export class DvdService {
  moviesURL = 'http://localhost:3001/movies'

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]> {
  	return this.http.get(this.moviesURL)
  		.map((res: Response) => res.json())
  }

  getMovie(id: number): Observable<Movie> {
  	return this.http.get(this.moviesURL + '/' + id + '.mp4')
  		.map((res: Response) => res.json())
  }
}
