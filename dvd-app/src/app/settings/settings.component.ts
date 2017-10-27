import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { FormGroup, FormControl, Validators, AbstractControl,
					FormBuilder } from '@angular/forms'
import { Http, Headers, Response } from '@angular/http'
import { AuthService } from '../auth/auth.service'
import { User } from '../user/user'
import { UserService } from '../user/user.service'
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router'
import { confirmPassword } from '../validators/confirm-password'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	private editForm: FormGroup
	user: User
	errorMessage
	id: number
	email: string = this.authTokenService.currentUserData.email

  constructor(private authTokenService: Angular2TokenService,
  						private authService: AuthService,
  						private userService: UserService,
  						private router: Router,
  						private route: ActivatedRoute,
  						private fb: FormBuilder) {}

  ngOnInit() {
  	let userData = this.authTokenService.currentUserData
  	this.editForm = this.fb.group({
  		'email': new FormControl(userData.email, [Validators.email, Validators.required, 
  																							Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
  		'password': new FormControl('', [Validators.minLength(8), Validators.maxLength(30)]),
  		'password_confirmation': new FormControl('', [Validators.minLength(8), Validators.maxLength(30)]) 
  	}, { validator: confirmPassword })
  }

  update(form: FormGroup) {
  	this.userService.update(form.value)
  		.subscribe(
  			data => { console.log('this is user: ' + data) },
  			error => { console.log('this is error: ' + error) }
  		 )
  	this.editForm.controls['password'].reset()
  	this.editForm.controls['password_confirmation'].reset()
  }
}