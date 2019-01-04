import { Injectable, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Omdb } from './omdb'

@Injectable()
export class OmdbService {
	private omdbUrl = 'http://www.omdbapi.com/?apikey=ccae566&';

	constructor(private http: Http) { }

	getOmdb(title: AbstractControl, year: AbstractControl): Observable<Omdb> {
		const headers = new Headers();
		const options = new RequestOptions({ headers: headers });

		return this.http.get(`${ this.omdbUrl }t=${ title }&y=${ year }&plot=full`, options)
			.map((res: Response) => res.json().Plot)
	}
}
