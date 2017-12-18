import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { DvdService } from '../dvd.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Movie } from 'app/dvd/dvd';

@Component({
	selector: 'app-dvd-edit',
	templateUrl: './dvd-edit.component.html',
	styleUrls: ['./dvd-edit.component.scss']
})
export class DvdEditComponent implements OnInit, AfterViewInit {
	movie: Movie
	id: number;
	editForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dvdService: DvdService,
		private location: Location,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.editForm = this.fb.group({
			'title': new FormControl(null, Validators.required),
			'year': new FormControl(null, Validators.required),
			'plot': new FormControl(null, Validators.required)
		})

		this.route.paramMap.subscribe(
			(params) => this.id = +params.get('id')
		)
	}

	ngAfterViewInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
		.subscribe((movie) => {
			this.movie = movie

			this.editForm.controls['title'].setValue(this.movie.title);
			this.editForm.controls['year'].setValue(this.movie.year);
			this.editForm.controls['plot'].setValue(this.movie.plot);
		})
	}

	editMovie(): void {
		this.dvdService.updateMovie(this.editForm.value, this.id)
			.subscribe(() => this.location.back());
	}
}
