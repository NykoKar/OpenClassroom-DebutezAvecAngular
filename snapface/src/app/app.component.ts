import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Boubou',
      'A teddy bear',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      17
    );

    this.myOtherSnap = new FaceSnap(
      'Bibi',
      'A grizzli',
      'https://cdn.pixabay.com/photo/2025/02/02/01/20/grizzly-9375881_1280.jpg',
      new Date(),
      3
    );

    this.myLastSnap = new FaceSnap(
      'Deda',
      'A bird',
      'https://cdn.pixabay.com/photo/2025/01/26/20/33/robin-9361610_1280.jpg',
      new Date(),
      10
    );
  }

}
