import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { DvdComponent } from './dvd/dvd.component'
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component'
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd-item.component'
import { DvdNewComponent } from './dvd/dvd-new/dvd-new.component'
import { SigninComponent } from './auth/signin/signin.component'
import { SettingsComponent } from './user/settings/settings.component'
import { AuthGuard } from './shared/auth.guard'
import { UserComponent } from './user/user.component'

const appRoutes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'signin' },
 { path: 'signin', component: SigninComponent },
 { path: 'library', component: DvdComponent, canActivate: [AuthGuard], children: [
 	{ path: '', component: DvdDetailComponent, outlet: 'dvd' },
 	{ path: 'movies', component: DvdDetailComponent, outlet: 'dvd' },
 	{ path: 'movies/:id', component: DvdItemComponent, outlet: 'dvd' },
 	{ path: 'new', component: DvdNewComponent, outlet: 'dvd' }
 ] },
 { path: 'users', component: UserComponent, canActivate: [AuthGuard], children: [
 		{ path: '', component: SettingsComponent },
 		{ path: 'settings/:id', component: SettingsComponent },
 ] },
 { path: 'about', component: AboutComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
