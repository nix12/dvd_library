import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import { DvdService } from '../../dvd.service'
import { Movie } from '../../dvd'

import 'rxjs/add/operator/switchMap'  

@Component({
  selector: 'app-dvd-item',
  templateUrl: './dvd-item.component.html',
  styleUrls: ['./dvd-item.component.scss']
})
export class DvdItemComponent implements OnInit {
  movie: Movie
  id: number

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private dvdService: DvdService) { 
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
      .subscribe(movie => this.movie = movie);
  }
}
