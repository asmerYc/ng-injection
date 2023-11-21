import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ng-injection';
  constructor(
    readonly router: Router
  ){}

  navigateToHreoIntruction() {
    this.router.navigate(['/introduce-hero']);
  }

  navigateToHreoList() {
    this.router.navigate(['/hero-list']);
  }
  
}
