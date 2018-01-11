import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { FlashMessagesModule } from 'angular2-flash-messages'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DvdComponent } from './dvd/dvd.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';

import { DvdService } from './dvd/dvd.service';
import { UserService } from './user/user.service'
import { AuthService } from './auth/auth.service';
import { Angular2TokenService } from 'angular2-token';
import { OmdbService } from './dvd/omdb.service';

import { OrderByPipe } from './orderby.pipe';
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd-item.component';
import { DvdNewComponent } from './dvd/dvd-new/dvd-new.component'

import { SigninComponent } from './auth/signin/signin.component'
import { SettingsComponent } from './user/settings/settings.component'
import { UserComponent } from './user/user.component'

import { AuthGuard } from './shared/auth.guard';
import { UrlSanitizerPipe } from './shared/url-sanitizer.pipe';
import { ShortenPipe } from './shorten.pipe';
import { DvdEditComponent } from './dvd/dvd-edit/dvd-edit.component';

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
		UrlSanitizerPipe,
		ShortenPipe,
		DvdEditComponent
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		AngularFontAwesomeModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpModule,
		NgProgressModule.forRoot(),
		FlashMessagesModule.forRoot()
	],
	providers: [
		DvdService,
		Angular2TokenService,
		AuthService,
		AuthGuard,
		UserService,
		OmdbService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
