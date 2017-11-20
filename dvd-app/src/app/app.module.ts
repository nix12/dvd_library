import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DvdComponent } from './dvd/dvd.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';

import { DvdService } from './dvd/dvd.service';
import { UserService } from './user/user.service'
import { AuthService } from './auth/auth.service';
import { Angular2TokenService } from 'angular2-token';

import { OrderByPipe } from './orderby.pipe';
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd-item.component';
import { DvdNewComponent } from './dvd/dvd-new/dvd-new.component'

import { SigninComponent } from './auth/signin/signin.component'
import { SettingsComponent } from './settings/settings.component'
import { UserComponent } from './user/user.component'

import { AuthGuard } from './shared/auth.guard';
import { UrlSanitizerPipe } from './shared/url-sanitizer.pipe';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		AboutComponent,
		DvdComponent,
		DvdDetailComponent,
		OrderByPipe,
		DvdItemComponent,
		DvdNewComponent,
		SigninComponent,
		SettingsComponent,
		UserComponent,
		UrlSanitizerPipe
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AngularFontAwesomeModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule
	],
	providers: [
		DvdService,
		Angular2TokenService,
		AuthService,
		AuthGuard,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
