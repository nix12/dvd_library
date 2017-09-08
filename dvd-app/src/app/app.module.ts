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
import { DvdAddComponent } from './dvd/dvd-add/dvd-add.component';
import { OrderByPipe } from './orderby.pipe';
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd-item.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    DvdComponent,
    DvdDetailComponent,
    DvdAddComponent,
    OrderByPipe,
    DvdItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DvdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
