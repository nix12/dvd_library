import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Router, NavigationExtras } from '@angular/router'
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { AuthService } from '../auth.service'
import * as Toast from "nativescript-toast";

@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private router: Router,
              private http: Http,
              private fb: FormBuilder,
              private authService: AuthService) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      'email': new FormControl(null, [Validators.required, Validators.email,
                                      Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      'password': new FormControl(null, Validators.required) 
    })
  }

  onSignin(form: any) {
    const email = form.email
    const password = form.password

    this.authService.signinUser({ email, password })
      .subscribe(
        () => {
          this.router.navigate(['movies'])
        }
        
        // (res) => {
        //   if(res.statusText == 'OK') {
        //     this.router.navigate(['movies'])
        //   } else {
        //     console.log(res.status + ' FAILURE')
        //     Toast.makeText(res.status + ' FAILURE').show();
        //   }
        // },
        // (error) => {
        //   Toast.makeText(error.message).show();
        // },
        // () => { 
        //   console.log('IN SUBSCRIBE') 
        //   Toast.makeText('IN SUBSCRIBE').show();
        // }
      )
  }
}