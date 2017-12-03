import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { DvdDetailComponent } from './dvd/dvd-detail/dvd.detail.component'
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd.item.component'
import { DvdService } from './dvd/dvd.service'
import { SigninComponent } from './auth/signin/signin.component'
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './shared/auth.guard'


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        DvdDetailComponent,
        DvdItemComponent,
        SigninComponent
    ],
    providers: [
        DvdService,
        AuthService,
        AuthGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
