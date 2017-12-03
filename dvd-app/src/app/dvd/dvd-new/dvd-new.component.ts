import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { DvdDetailComponent } from '../dvd-detail/dvd-detail.component';
import { DvdService } from '../dvd.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dvd-new',
	templateUrl: './dvd-new.component.html',
	styleUrls: ['./dvd-new.component.scss']
})
export class DvdNewComponent implements OnInit {
	newForm: FormGroup
	@ViewChild('fileInput') fileInput;

	constructor(private dvdService: DvdService,
							private router: Router) { }

	ngOnInit() {
		this.newForm = new FormGroup({
			'title': new FormControl(null, Validators.required),
			'year': new FormControl(null, Validators.required),
			'plot': new FormControl(null, Validators.required)
		})
	}

	upload() {
		const movieFile = this.fileInput.nativeElement.files[0];

		this.dvdService.newMovie(movieFile, this.newForm.value)
			.subscribe(
				() => {
					this.router.navigate(['/library']);
				}
			)
	}
}
