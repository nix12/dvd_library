import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DvdDetailComponent } from '../dvd-detail/dvd-detail.component';
import { DvdService } from '../dvd.service';
import { Router } from '@angular/router';
import { OmdbService } from '../omdb.service';
import { NgProgress } from '@ngx-progressbar/core'

@Component({
	selector: 'app-dvd-new',
	templateUrl: './dvd-new.component.html',
	styleUrls: ['./dvd-new.component.scss']
})
export class DvdNewComponent implements OnInit, OnDestroy {
	newForm: FormGroup;
	@ViewChild('fileInput') fileInput;
	@ViewChild('plot') plot;
	plotData: any;
	valueChanges: any;

	constructor(
		private dvdService: DvdService,
		private router: Router,
		private omdb: OmdbService,
		private fb: FormBuilder,
		private progress: NgProgress
	) { }

	ngOnInit() {
		this.newForm = this.fb.group({
			'primary': this.fb.group({
				'title': new FormControl(null, Validators.required),
				'year': new FormControl(null, Validators.required)
			}),
			'plot': new FormControl(this.plotData, Validators.required)
		})

		this.valueChanges = this.newForm.controls['primary'].valueChanges
			.subscribe(() => {
				const title: FormControl = this.newForm.get('primary.title').value
				const year: FormControl = this.newForm.get('primary.year').value;
				this.omdb.getOmdb(title, year)
					.subscribe(
						(res) => {
							this.plotData = res;
							this.newForm.controls['plot'].patchValue(this.plotData);
					});
			})
	}

	ngOnDestroy() {
		this.valueChanges.unsubscribe();
	}

	upload() {
		const movieFile = this.fileInput.nativeElement.files[0];

		this.progress.start();

		this.dvdService.newMovie(
			movieFile,
			this.newForm.get('primary.title').value,
			this.newForm.get('primary.year').value,
			this.newForm.get('plot').value
		)
			.subscribe(
				() => {
					this.progress.done();
					this.router.navigate(['/library']);
				}
			)
	}
}
