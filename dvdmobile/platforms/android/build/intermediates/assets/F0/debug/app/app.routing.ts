import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DvdDetailComponent } from './dvd/dvd-detail/dvd.detail.component'
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd.item.component'
import { SigninComponent } from './signin/signin.component'

const routes: Routes = [
	{ path: "", component: SigninComponent },
  { path: "movies", component: DvdDetailComponent },
  { path: ":id", component: DvdItemComponent },

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }