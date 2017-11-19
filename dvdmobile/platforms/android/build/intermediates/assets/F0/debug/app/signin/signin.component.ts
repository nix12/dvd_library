import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import * as Toast from "nativescript-toast";

@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private router: Router,
              private http: Http) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email,
                                      Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      'password': new FormControl(null, Validators.required) 
    })
  }

  onSignin(form: any) {
    let headers = new Headers()
    headers.append("Content-Type", "application/json")
    let options = new RequestOptions({ headers: headers })
    const email: string = form.email
    const password: string = form.password
    let signin = { email, password }
    let url = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com'

    this.http.post(url, JSON.stringify(signin), options)
      .map((res: Response) => res.json())
      .subscribe(
        (res) => {
          if (res.status == 200) {
            this.router.navigate(['/library'], { queryParams: { jwt: res.token } })
          } 
        },
        (error) => {
          Toast.makeText(error.json().message).show();
        }
      )
  }
}