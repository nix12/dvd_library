import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router'
import { Movie } from '../../dvd'
import { DomSanitizer } from '@angular/platform-browser';
import { registerElement } from 'nativescript-angular/element-registry'
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
import 'rxjs/add/operator/switchMap'  

@Component({
  moduleId: module.id,
  selector: 'app-dvd-item',
  templateUrl: './dvd.item.component.html',
  styleUrls: ['./dvd.item.component.css']
})
export class DvdItemComponent implements OnInit {
  movie: Movie
  id: number

  constructor(private route: PageRoute,
              private sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.route.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {
        this.id = +params['id'];
      });
  }

  sanitizeUrl(url) {
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://moviedatabase-env.us-west-2.elasticbeanstalk.com' + url)

    return sanitizedUrl
  }
}
