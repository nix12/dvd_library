import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './dvd';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class DvdService {
	moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies';

	constructor(private http: Http,
							private authTokenService: Angular2TokenService) { }

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

	newMovie(fileToUpload: File, form): Observable<Movie> {
		const formData = new FormData();
		formData.append('title', form.title);
		formData.append('year', form.year);
		formData.append('plot', form.plot);
		formData.append('video', fileToUpload);
		const headers = new Headers();
		headers.delete('Content-Type');
		headers.append('access-token', this.authTokenService.currentAuthData.accessToken);
		headers.append('client', this.authTokenService.currentAuthData.client);
		const options = new RequestOptions({ headers: headers });

		return this.http.post(this.moviesURL, formData, options)
			.map((res) => res.json())
	}
}
