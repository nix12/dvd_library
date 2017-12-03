import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, CanActivate } from "@angular/router";

import { DvdDetailComponent } from './dvd/dvd-detail/dvd.detail.component'
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd.item.component'
import { SigninComponent } from './auth/signin/signin.component'
import { AuthGuard } from './shared/auth.guard'

const routes: Routes = [
  { path: "", redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: "movies", component: DvdDetailComponent, canActivate: [AuthGuard] },
  { path: "movies/:id", component: DvdItemComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }