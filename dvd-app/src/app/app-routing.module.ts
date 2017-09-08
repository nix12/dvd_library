import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { DvdComponent } from './dvd/dvd.component'
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component'
import { DvdAddComponent } from './dvd/dvd-add/dvd-add.component'
import { DvdItemComponent } from './dvd/dvd-detail/dvd-item/dvd-item.component'

const appRoutes: Routes = [
 { path: '', redirectTo: '/', pathMatch: 'full' },
 { path: 'library', component: DvdComponent, children: [
 	{ path: '', component: DvdDetailComponent , outlet: 'dvd' },
 	{ path: 'movies', component: DvdDetailComponent, outlet: 'dvd' },
 	{ path: 'movies/:id', component: DvdItemComponent, outlet: 'dvd' },
 	{ path: 'add', component: DvdAddComponent, outlet: 'dvd' }
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