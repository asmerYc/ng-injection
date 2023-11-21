import { HerosService } from './../../ng-injection/services/heros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  heroList = this.herosService.heroList;
  constructor(
    readonly herosService: HerosService
  ) { }

  ngOnInit() {
  }

}
