import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Movie } from './dvd'
import { Movies } from './mock-dvd'

@Injectable()
export class DvdService {
  constructor() { }

  getMovies(): Promise<Movie[]> {
		return Promise.resolve(Movies)
  }

  getMovie(id: number): Promise<Movie> {
  	return this.getMovies()
  		.then(movies => movies.find(movie => movie.id === id))
  }
}
