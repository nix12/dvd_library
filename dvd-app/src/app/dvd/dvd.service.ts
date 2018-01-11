import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './dvd';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';
import { FormGroup } from '@angular/forms/src/model';

@Injectable()
export class DvdService {
	// moviesURL = 'http://localhost:3001/movies';
	moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies';
	public status: number;

	constructor(
		private http: Http,
		private authTokenService: Angular2TokenService
	) { }

	getMovies(): Observable<Movie[]> {
		const headers = new Headers();
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.get(this.moviesURL, options)
			.map((res: Response) => res.json())
	}

	getMovie(id: number): Observable<Movie> {
		const headers = new Headers();
		headers.append('Accept', 'video/mp4');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
			.map(
				(res: Response) => res.json(),
				(error) => console.log(error)
			)
	}

	newMovie(fileToUpload: File, title: string, year: string, plot: string): Observable<Movie> {
		const formData = new FormData();
		formData.append('title', title);
		formData.append('year', year);
		formData.append('plot', plot);
		formData.append('video', fileToUpload);
		const headers = new Headers();
		headers.delete('Content-Type');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.post(this.moviesURL, formData, options)
			.map((res: Response) => {
				this.status = res.status;
				return res.json();
			})
	}

	updateMovie(movie: FormGroup, id: number): Observable<Movie> {
		const headers = new Headers();
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });


		return this.http.put(this.moviesURL + '/' + id, movie, options)
			.map((res: Response) => res.json())
	}
}
