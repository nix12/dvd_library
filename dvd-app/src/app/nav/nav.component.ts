import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { Angular2TokenService } from 'angular2-token'
import { User } from '../user/user'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	user: User

  constructor(private authService: AuthService,
  						private router: Router,
  						private authTokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  signoutUser() {
  	this.authService.signoutUser()
  		.subscribe(
  			() => { this.router.navigate(['/']) }
  		)
  }
}
