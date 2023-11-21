import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {

  heroList = this.herosServices.heroList

  constructor(
    readonly herosServices: HerosService
  ) { }

  ngOnInit() {
  }

}
