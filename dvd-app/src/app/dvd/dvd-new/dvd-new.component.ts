import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DvdService } from '../dvd.service';
import { Router } from '@angular/router';
import { OmdbService } from '../omdb.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../auth/auth.service';

declare var require: any;
const Uppy = require('uppy/lib/core');
const Dashboard = require('uppy/lib/plugins/Dashboard');
const Tus = require('uppy/lib/plugins/Tus');

@Component({
	selector: 'app-dvd-new',
	templateUrl: './dvd-new.component.html',
	styleUrls: ['./dvd-new.component.scss']
})
export class DvdNewComponent implements OnInit, AfterViewInit, OnDestroy {
	newForm: FormGroup;
	@ViewChild('plot') plot;
	plotData: any;
	valueChanges: any;
	private uppy;

	constructor(
		private dvdService: DvdService,
		private router: Router,
		private omdb: OmdbService,
		private fb: FormBuilder,
		private flashMessagesService: FlashMessagesService,
		private authService: AuthService
	) { }

	ngOnInit(): void {
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

	ngAfterViewInit() {
		const fileInputs: HTMLElement[] = Array.from(document.querySelectorAll('input[type=file]'));

		fileInputs.forEach(fileInput => {
			fileInput.style.display = 'none';

			this.uppy = Uppy({
				id: fileInput.id,
				autoProceed: false,
				restrictions: {
					maxFileSize: 3000000000,
					maxNumberOfFiles: 1,
					minNumberOfFiles: 1,
					allowedFileTypes: ['video/*']
				}
			})
				.use(Dashboard, {
					trigger: 'form',
					target: fileInput.parentNode,
					showLinkToFileUploadResult: false,
					inline: true,
					height: 250,
					width: 250
				})
				.use(Tus, {
					endpoint: 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/files',
					chunkSize: 5 * 1024 * 1024,
					resume: true,
					autoRetry: true,
					retryDelays: [0, 1000, 3000, 5000]
				})
				.run();

				this.uppy.on('upload-success', (file, data) => {
					const uploadedFileData = JSON.stringify({
						id: data.url,
						storage: 'cache',
						metadata: {
							filename:  file.name,
							size:      file.size,
							mime_type: file.type,
							title: this.newForm.get('primary.title').value,
							year: this.newForm.get('primary.year').value,
							plot: this.plotData
						}
					});
					const attachment = JSON.stringify({
						movie: {
							video: {
								id: data.url,
								storage: 'cache',
								metadata: {
									filename:  file.name,
									size:      file.size,
									mime_type: file.type,
									title: this.newForm.get('primary.title').value,
									year: this.newForm.get('primary.year').value,
									plot: this.plotData
								}
							}
						}
					});

					const hiddenInput = document.getElementById('video_data') as HTMLInputElement;
					hiddenInput.value = uploadedFileData;
					hiddenInput.name = attachment;
			});
		});
	}

	ngOnDestroy() {
		this.valueChanges.unsubscribe();
	}

	upload() {
		const video_data = document.getElementById('video_data');

		this.flashMessagesService.show('Your video is being uploaded', { cssClass: 'alert-success', timeout: 5000 })

		this.dvdService.newMovie(
			video_data.getAttribute('value'),
			this.newForm.get('primary.title').value,
			this.newForm.get('primary.year').value,
			this.newForm.get('plot').value
		)
			.subscribe(
				() => {
					if (this.dvdService.status === 200) {
						this.flashMessagesService.show('Video upload successful', { cssClass: 'alert-success', timeout: 10000 });
					}
				},
				(error) => {
				 this.flashMessagesService.show('Video upload failed', { cssClass: 'alert-danger', timeout: 10000 });

					let header: number;
					this.dvdService.header.subscribe((value) => header = value);

					if (header === 401) {
						this.router.navigate(['/signin']);
						this.dvdService.header.next(200);
						this.authService.userSignedIn$.next(false);
					}
				}
			)

		this.newForm.reset();
	}
}
