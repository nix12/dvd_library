import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DvdDetailComponent } from '../dvd-detail/dvd-detail.component'
import { Movies } from '../mock-dvd' 

@Component({
  selector: 'app-dvd-add',
  templateUrl: './dvd-add.component.html',
  styleUrls: ['./dvd-add.component.scss']
})
export class DvdAddComponent implements OnInit {
	addForm: FormGroup

  constructor() { }

  ngOnInit() {
  	this.addForm = new FormGroup({
  		'id': new FormControl(null, Validators.required),
	  	'title': new FormControl(null, Validators.required)
	  })
  }

  onSubmit() {	
  	Movies.push(this.addForm.value)
  	console.log(this.addForm)
  }


}
