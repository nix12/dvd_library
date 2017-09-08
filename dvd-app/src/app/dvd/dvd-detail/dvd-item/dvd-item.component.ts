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
  @Input() movie: Movie
  @Input() id: number

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private dvdService: DvdService) { 
    // this.route.params.subscribe(
    //   params => this.id = params["id"]
    // )
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dvdService.getMovie(+params.get('id')))
      .subscribe(movie => this.movie = movie);

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id']
    //       this.movie = this.dvdService.getMovie(this.id)
    //     }
    //   )

    // const id = +this.route.snapshot.params["id"]

    // this.dvdService.getMovie(id)
    //   .then((movie) => { this.movie = movie})


  }
}
