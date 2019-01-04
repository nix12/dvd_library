import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './dvd';
import { Angular2TokenService } from 'angular2-token';
import { FormGroup } from '@angular/forms/src/model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DvdService {
	// moviesURL = 'http://localhost:3001/movies';
	moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies';
	// moviesURL = 'https://ancient-brushlands-58872.herokuapp.com/movies';
	public status: number;
	public header: BehaviorSubject<number> = new BehaviorSubject(200);

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
			.map(
				(res: Response) => {
					this.status = res.status;
					this.header.next(res.status)
					return res.json();
				}
			)
			.catch((error: any) => {
				this.header.next(error.status)
				return Observable.throw(new Error(error.status));
			})
	}

	getMovie(id: number): Observable<Movie> {
		const headers = new Headers();
		headers.append('Accept', 'video/mp4');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
			.map(
				(res: Response) => {
					this.status = res.status;
					this.header.next(res.status)
					return res.json()
				},
				(error) => console.log(error)
			)
			.catch((error: any) => {
				this.header.next(error.status)
				return Observable.throw(new Error(error.status));
			})
	}

	newMovie(video_data: string, title: string, year: string, plot: string): Observable<Movie> {
		const formData = new FormData();
		formData.append('video', video_data);
		formData.append('title', title);
		formData.append('year', year);
		formData.append('plot', plot);
		const headers = new Headers();
		headers.delete('Content-Type');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.post(this.moviesURL, formData, options)
			.map((res: Response) => {
				this.status = res.status;
				this.header.next(res.status)
				return res.json();
			})
			.catch((error: any) => {
				this.header.next(error.status)
				return Observable.throw(new Error(error.status));
			})
	}

	updateMovie(movie: FormGroup, id: number): Observable<Movie> {
		const headers = new Headers();
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });


		return this.http.put(this.moviesURL + '/' + id, movie, options)
			.map((res: Response) => {
				this.status = res.status;
				this.header.next(res.status)
				return res.json()
			})
			.catch((error: any) => {
				this.header.next(error.status)
				return Observable.throw(new Error(error.status));
			})
	}
}
