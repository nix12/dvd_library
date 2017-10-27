import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DvdDetailComponent } from '../dvd-detail/dvd-detail.component'
import { Movies } from '../mock-dvd' 

@Component({
  selector: 'app-dvd-new',
  templateUrl: './dvd-new.component.html',
  styleUrls: ['./dvd-new.component.scss']
})
export class DvdNewComponent implements OnInit {
	newForm: FormGroup

  constructor() { }

  ngOnInit() {
  	this.newForm = new FormGroup({
  		'id': new FormControl(null, Validators.required),
	  	'title': new FormControl(null, Validators.required)
	  })
  }

  onSubmit() {	
  	Movies.push(this.newForm.value)
  	console.log(this.newForm)
  }
}
