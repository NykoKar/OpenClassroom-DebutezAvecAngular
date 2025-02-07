import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor( private router: Router) {}

  displayFaceSnaps() {
    this.router.navigateByUrl('facesnaps');
  }
}
